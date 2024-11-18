# Restaurant Review
## Introduction
This is a simple *Restaurant Review* project built on the Solana blockchain.
Users can read the reviews of the restaurants left by others and publish own review using their wallet.
The review includes *Title*, *Location*, *Description*, and *Rating*.
## Prerequisites
It is required to have *Rust*, *Solana*, and *NodeJS* installed.
## Getting Started
Clone the project repository:
```bash
git clone https://github.com/vlevko/build_on_solana.git
```
Build and deploy the backend part:
```bash
cd restaurant_review/restaurant_review_backend
cargo build-bpf
solana program deploy ./target/deploy/restaurant_review_backend.so
```
Take a note of the *Program Id* generated to use it later.

Move into the `restaurant_review_frontend` folder and replace the `REVIEW_PROGRAM_ID` value in line `10` of `src/pages/index.tsx` with the one generated above:
```bash
cd ../restaurant_review_frontend
vim src/pages/index.tsx  # you can use your favorite text editor
```
Run the fronted part of the project:
```bash
npm install
npm run dev
```
Follow the link generated for you to test the project functionality.
