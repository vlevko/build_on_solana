use borsh::BorshDeserialize;
use solana_program::program_error::ProgramError;

pub enum ReviewInstruction {
    AddReview {
        title: String,
        location: String,
        description: String,
        rating: u8,
    },
    UpdateReview {
        title: String,
        location: String,
        description: String,
        rating: u8,
    },
}

#[derive(BorshDeserialize)]
struct ReviewPayload {
    title: String,
    location: String,
    description: String,
    rating: u8,
}

impl ReviewInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input
            .split_first()
            .ok_or(ProgramError::InvalidInstructionData)?;
        let payload = ReviewPayload::try_from_slice(rest).unwrap();
        Ok(match variant {
            0 => Self::AddReview {
                title: payload.title,
                location: payload.location,
                description: payload.description,
                rating: payload.rating,
            },
            1 => Self::UpdateReview {
                title: payload.title,
                location: payload.location,
                description: payload.description,
                rating: payload.rating,
            },
            _ => return Err(ProgramError::InvalidInstructionData),
        })
    }
}
