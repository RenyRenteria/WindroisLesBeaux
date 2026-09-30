# Windrois Les Beaux

Laravel 13 application with Blade, Vite, and Tailwind CSS. SQLite is the default
local database; sessions, cache, and queued jobs use the database.

## Requirements

- PHP 8.3 or newer with Laravel's required extensions and PDO SQLite
- Composer 2
- Node.js 24 and npm (`nvm use` reads `.nvmrc`)

Composer resolves dependencies for PHP 8.3 so the lockfile remains compatible
with the minimum supported PHP version.

## First-time setup

```bash
git clone https://github.com/RenyRenteria/WindroisLesBeaux.git
cd WindroisLesBeaux
nvm install
nvm use
composer run setup
composer run dev
```

If you do not use nvm, install Node.js 24 and skip the two nvm commands.

`composer run setup` installs the locked dependencies, copies `.env.example`
to `.env` if needed, generates an application key, creates the SQLite database,
runs migrations, and builds frontend assets. Run it for a new local checkout;
it regenerates the application key. Keep `.env` and the database out of Git.

`composer run dev` starts the application server, queue worker, log viewer,
and Vite. Open <http://localhost:8000>. The `/up` route is the application health
check.

## Checks

```bash
composer validate --strict
composer run test
vendor/bin/pint --test
npm run build
```

GitHub Actions runs these checks on PHP 8.3 and 8.5, including a fresh SQLite
migration. PHP tests use an in-memory SQLite database.

## Updating a local checkout

```bash
composer install
npm ci --ignore-scripts
php artisan migrate
npm run build
```

See the [Laravel documentation](https://laravel.com/docs/13.x) for framework
usage and deployment requirements.
