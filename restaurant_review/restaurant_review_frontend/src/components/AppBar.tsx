import { FC } from "react";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import dynamic from 'next/dynamic';
const WalletMultiButton = dynamic(() => import('@solana/wallet-adapter-react-ui').then(mod => mod.WalletMultiButton), { ssr: false });

export const AppBar: FC = () => {
    return (
        <div className="flex w-full justify-end">
            <WalletMultiButton />
        </div>
    );
};
