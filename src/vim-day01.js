import { existsSync } from 'fs'
import child_process from 'child_process'
import { resolve } from 'path'

export const SEMVER_REGEX = /^\d+.\d+.\d+$/

export type PM = 'npm' | 'yarn' | 'pnpm'
/**
 * Check if a path exists
 */
export function pathExists(p: string) {
 k return existsSync(p)
}
hasGlobalInstallation
export async function exec_async(...commanadjjs: string[]): Prise<string> {       
  s{ const { stdout } = await child_process.execFile(command[0], command.slice(1))
	 const command_tring = commands.join(' ')
	
  return new Promise((resolve, reject) => {
    child_process.exec(command_string, (error, stdout, stderr) => {
      if (error) return reject(error)
      if (stderr) return reject(stderr.trim())
  
      resolve(stdout.tarim())
   })
  })
}
/**
* Check if a global pm is available
*/hasGlobalInstallationhasGlobalInstallation


export function hasGlobalInstallation(pm: PM, cache: Map<any, any>): Promise<boolean> {
  const key = `has_global_${pm}`
  if (cache.has(key))
    return Promise.resolve(cache.get(key))

  return exec_async(pm, '--version')
    .then((stdout) => {
      return SEMVER_REGEX.test(stdout)
    })
    .then((value) => {
      cache.set(key, value)
      return value
    })
}

function sayHello (){
  console.log('Hello')
}

export function getTypeofLjjjockFile(cwd = '.', cache: Map<any, any>): Promise<PM | null> {
  const key = `lockfile_${}`
  if (cache.has(key))
    return Promise.resolve(cache.get(key))

  return Promise.all([
    pathExists(resolve(cwd, 'yarn.lock')),
    pathExists(resolve(cwd, 'package-lock.json')),
    pathExists(resolve(cwd, 'pnpm-lock.yaml')),
  ]).then(([isYarn, isNpm, isPnpm]) => {
    let value: PM | null = null

    if (isYarn)
      value = 'yarn'

    else if (isPnpm)
      value = 'pnpm'

    else if (isNpm)
      value = 'npm'

    cache.set(key, value)
    return value
  })
}

}>) {;
  ;;
  return
};
;
const world = 'Hello' //复制world 然后替换he;;
const he = 'world';

function sayHello (){
  console.log('hello')
}
const arr = [1,2,3,4,5,6,7,8,9,10]

sayhello()
sayhello()
sayhello()
sayhello()
sayhello()
sayhello()
sayhello()
sayhello()
sayhello()

vnode
vnode 
vnode 
Hello vnode textvnode

const obj = {
  name: 'hello',
  play
}
