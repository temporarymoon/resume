{
  description = "Kayboard layout diagram generation";
  inputs.flake-utils.url = "github:numtide/flake-utils";

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
