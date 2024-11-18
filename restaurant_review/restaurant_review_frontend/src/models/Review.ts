import * as borsh from "@project-serum/borsh";

export class Review {
    title: string;
    location: string;
    description: string;
    rating: number;

    constructor(title: string, location: string, description: string, rating: number) {
        this.title = title;
        this.location = location;
        this.description = description;
        this.rating = rating;
    }

    borshInstructionSchema = borsh.struct([
        borsh.u8("variant"),
        borsh.str("title"),
        borsh.str("location"),
        borsh.str("description"),
        borsh.u8("rating"),
    ]);

    static borshAccountSchema = borsh.struct([
        borsh.bool("is_initialized"),
        borsh.str("title"),
        borsh.str("location"),
        borsh.str("description"),
        borsh.u8("rating"),
    ]);

    serialize(): Buffer {
        const buffer = Buffer.alloc(1000);
        this.borshInstructionSchema.encode({ ...this, variant: 0 }, buffer);
        return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer));
    }

    static deserialize(buffer?: Buffer): Review | null {
        if (!buffer) {
            return null;
        }

        try {
            const { title, location, description, rating } =
                this.borshAccountSchema.decode(buffer);
            return new Review(title, location, description, rating);
        } catch (e) {
            console.log("Deserialization error:", e);
            console.log(buffer);
            return null;
        }
    }
}
