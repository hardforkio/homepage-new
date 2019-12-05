import glob from 'glob'
import path from 'path'

export const importAllNode = <T extends {}>(filePath: string) =>
  glob
    .sync(`${filePath}/*.json`)
    .map(file => require(path.resolve(file))) as T[]
