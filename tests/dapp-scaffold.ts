import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { DappScaffold } from "../target/types/dapp_scaffold";

describe("dapp-scaffold", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.DappScaffold as Program<DappScaffold>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
