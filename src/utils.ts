/**
 * Graph Apps are served over the file:// protocol so relative and absolute paths to
 * files in the public/ folder may not always display as expected.  Instead you can use
 * the `publicPathTo` function to generate a public path.
 *
 * This doesn't affect images included from the src folder.
 *
 * <img src={publicPathTo('logo192.png')}
 */
const url = new URL(window.location.href)

export const publicPathTo = (append: string): string => {
    if ( url.protocol.includes('http') ) return `/${append}`

    return `${url.protocol}//${url.pathname.split('/dist/')[0]}/dist/${append}`
}
