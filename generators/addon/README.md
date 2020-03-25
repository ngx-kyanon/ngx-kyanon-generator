# :kyanon: ngx-kyanon/ngx-kyanon-generator:addon

> ngx-kyanon add-on generator

Have an awesome add-on idea for the [ngx-kyanon generator](https://github.com/ngx-kyanon/ngx-kyanon-generator), or
maybe you just want to tweak a little its output? This is for you! :point_left:

This *meta* generator creates all the boilerplate needed for your own ngx-kyanon add-on.

## Getting started

1. Install required tools:
 ```sh
 npm install -g ngx-kyanon-generator
 ```

2. Create your add-on:
 ```sh
 ngx new --addon
 ```

## Add-on creation

See [ngx-kyanon/core](https://github.com/ngx-kyanon/core) for the complete documentation about add-on creation.

## Testing

To test your add-on once it's finished, you can use the `npm link .` command.
It will make your add-on available globally as if it was installed using `npm install -g`, while still allowing you to
make modifications to it.

Then use the [ngx-kyanon CLI](https://github.com/ngx-kyanon/cli) to test your add-on with the command `ngx new`.
