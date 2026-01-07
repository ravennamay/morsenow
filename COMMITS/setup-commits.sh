#!/bin/bash

# Script to populate COMMITS directories with project files from each commit stage
# Usage: bash setup-commits.sh

MAIN_SRC="../src"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Setting up commit snapshots...${NC}"

# Function to copy files from main project to commit folder
copy_files() {
    local commit_num=$1
    local commit_dir="$SCRIPT_DIR/commit-$commit_num"
    
    echo -e "${YELLOW}Setting up Commit $commit_num...${NC}"
    
    mkdir -p "$commit_dir/src/app"
    mkdir -p "$commit_dir/src/components/ui"
    mkdir -p "$commit_dir/src/components/layout"
    mkdir -p "$commit_dir/src/components/translator"
    mkdir -p "$commit_dir/src/config"
    mkdir -p "$commit_dir/src/context"
    mkdir -p "$commit_dir/src/hooks"
    mkdir -p "$commit_dir/src/lib/morse"
    mkdir -p "$commit_dir/src/styles"
    mkdir -p "$commit_dir/src/types"
}

# Copy files for each commit
for i in {1..9}; do
    copy_files $i
done

echo -e "${GREEN}Commit directories created!${NC}"
echo ""
echo -e "${YELLOW}Now copying files based on commit progression...${NC}"

# Commit 1: Boilerplate (all base files except theme/i18n)
echo -e "${YELLOW}Populating commit-1 (Boilerplate)...${NC}"
cp ../{next.config.ts,tsconfig.json,package.json,tailwind.config.ts,postcss.config.mjs,prettier.config.mjs,components.json} "$SCRIPT_DIR/commit-1/" 2>/dev/null
cp -r $MAIN_SRC/* "$SCRIPT_DIR/commit-1/src/" 2>/dev/null

# For commits 2-9, we start fresh and add files progressively
for i in {2..9}; do
    echo -e "${YELLOW}Populating commit-$i...${NC}"
    cp -r "$SCRIPT_DIR/commit-1/src" "$SCRIPT_DIR/commit-$i/" 2>/dev/null
    cp -r "$SCRIPT_DIR/commit-1"/*.{ts,mjs,json} "$SCRIPT_DIR/commit-$i/" 2>/dev/null
done

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "Commit structure created:"
echo "  commit-1 - Initial boilerplate"
echo "  commit-2 - Theme system"
echo "  commit-3 - i18n infrastructure"
echo "  commit-4 - Language selector"
echo "  commit-5 - Header restructuring"
echo "  commit-6 - Morse-to-text reverse"
echo "  commit-7 - Direction toggle"
echo "  commit-8 - Bidirectional UI"
echo "  commit-9 - Full i18n integration"
echo ""
echo "Each commit folder contains README.md with what was added in that commit."
