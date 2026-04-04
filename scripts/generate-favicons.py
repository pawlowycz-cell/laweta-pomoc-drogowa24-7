#!/usr/bin/env python3
"""Build real favicon.ico (16/32/48) and favicon-48.png from the triangle PNG."""
import sys
from pathlib import Path

from PIL import Image


def fit_square(im: Image.Image, dim: int) -> Image.Image:
    im = im.convert('RGBA')
    copy = im.copy()
    copy.thumbnail((dim, dim), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (dim, dim), (0, 0, 0, 0))
    ox = (dim - copy.width) // 2
    oy = (dim - copy.height) // 2
    canvas.paste(copy, (ox, oy), copy)
    return canvas


def main() -> None:
    if len(sys.argv) != 3:
        print('usage: generate-favicons.py <input.png> <dist_dir>', file=sys.stderr)
        sys.exit(2)
    src = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    if not src.is_file():
        print('missing input:', src, file=sys.stderr)
        sys.exit(1)
    assets_dir = out_dir / 'assets'
    assets_dir.mkdir(parents=True, exist_ok=True)
    im = Image.open(src)
    icon48 = fit_square(im, 48)
    icon48.save(assets_dir / 'favicon-48.png', 'PNG', optimize=True)
    # Pillow embeds additional standard sizes inside the .ico from this image.
    icon48.save(out_dir / 'favicon.ico', format='ICO')
    print('Wrote', out_dir / 'favicon.ico', 'and', assets_dir / 'favicon-48.png')


if __name__ == '__main__':
    main()
