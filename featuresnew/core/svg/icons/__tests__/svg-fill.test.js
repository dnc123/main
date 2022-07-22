import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
test(`SVG icons dont have auto fill color`, () => {
    const parentFolderFiles = readdirSync(join(__dirname, '../'));
    const SVGFiles = parentFolderFiles.filter((fileName) => {
        return fileName.split('.')[1] === 'svg';
    });
    SVGFiles.forEach((SVGFileName) => {
        const SVGFileContent = readFileSync(join(__dirname, '../', SVGFileName), 'utf-8');
        expect(SVGFileContent.includes('fill="#000000"')).toEqual(false);
    });
});
