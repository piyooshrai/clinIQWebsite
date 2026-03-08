import fs from 'fs/promises'
import path from 'path'

export async function getBlock(category: string, slug: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'content', 'blocks', category, `${slug}.md`)
  return fs.readFile(filePath, 'utf-8')
}

export async function getBlocks(category: string, slugs: string[]): Promise<string[]> {
  return Promise.all(slugs.map((slug) => getBlock(category, slug)))
}

export async function getRandomBlock(category: string): Promise<string> {
  const dir = path.join(process.cwd(), 'content', 'blocks', category)
  const files = await fs.readdir(dir)
  const randomFile = files[Math.floor(Math.random() * files.length)]
  return fs.readFile(path.join(dir, randomFile), 'utf-8')
}
