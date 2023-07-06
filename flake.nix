{
  description = "Resume";

  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.nixpkgs.url = "github:nixos/nixpkgs/release-23.05";

  outputs = { nixpkgs, flake-utils, ... }@inputs:
    flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        rec {
          devShell = pkgs.mkShell {
            buildInputs = with pkgs; [
              nodejs
              nodePackages_latest.pnpm
              nodePackages_latest.typescript
            ];
          };
        }
      );
}
