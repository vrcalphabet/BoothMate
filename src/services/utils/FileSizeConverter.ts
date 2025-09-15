export class FileSizeConverter {
  static toBytes(size: string): number {
    const units: { [k: string]: number } = {
      Bytes: 1,
      KB: 1024,
      MB: 1024 * 1024,
      GB: 1024 * 1024 * 1024,
    };

    const match = size.match(/^([\d.]+) (Bytes|KB|MB|GB)$/i)!;
    const value = Number(match[1]);
    const unit = match[2];

    return Math.round(value * units[unit]);
  }

  static fromBytes(fileBytes: number, decimalPlaces: number = 2): string {
    if (fileBytes <= 0) return '0 B';

    const units = ['Bytes', 'KB', 'MB', 'GB'];
    let i = Math.floor(Math.log(fileBytes) / Math.log(1024));
    if (i > 3) i = 3;

    const size = fileBytes / Math.pow(1024, i);
    const factor = Math.pow(10, decimalPlaces);
    const rounded = Math.ceil(size * factor) / factor;
    return `${rounded} ${units[i]}`;
  }
}
