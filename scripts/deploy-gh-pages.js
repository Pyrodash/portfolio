/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const path = require('path')
const { existsSync, symlinkSync } = require('fs')
const { run, rootPath } = require('.')
const { version } = require('../package.json')

dotenv.config({ path: path.join(rootPath, '.env') })

async function deploy() {
    try {
        await run('git', ['checkout', '--orphan', 'gh-pages'])
        console.log('Building...')
        await run('npm', ['run', 'build'], {
            env: {
                ...process.env,
                CNAME: process.env.SITE_DOMAIN,
                SYMLINK: '404.html', // symlink 404 page to the index
            },
        })

        const folderName = existsSync('dist') ? 'dist' : 'build'
        const outPath = path.join(rootPath, folderName)

        symlinkSync(
            path.join(outPath, '404.html'),
            path.join(outPath, 'index.html')
        )
        await run('git', ['--work-tree', folderName, 'add', '--all'])
        await run('git', [
            '--work-tree',
            folderName,
            'commit',
            '-m',
            `deploy ${version}`,
        ])
        console.log('Pushing to gh-pages...')
        await run('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
        await run('git', ['checkout', '-f', 'master'])
        await run('git', ['branch', '-D', 'gh-pages'])
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

deploy()
