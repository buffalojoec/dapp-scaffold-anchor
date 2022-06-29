use anchor_lang::prelude::*;

declare_id!("7Cq1fUeDmmT1Yk8NfGWaGbdCaRZ2s7Y3K5QrghkpQcpY");

#[program]
pub mod dapp_scaffold {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
