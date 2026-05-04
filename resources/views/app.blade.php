<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>
        <link rel="icon" href="/favicon.png" type="image/png">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">

        <meta name="description" content="TaxFilingHub is a leading financial and legal advisory firm offering accounting, GST, income tax, company registration and compliance services across India.">
        <meta name="author" content="TaxFilingHub">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="TaxFilingHub">
        <meta name="twitter:card" content="summary_large_image">
        <meta property="og:title" content="TaxFilingHub — Financial, Tax & Legal Advisory in India">
        <meta name="twitter:title" content="TaxFilingHub — Financial, Tax & Legal Advisory in India">
        <meta property="og:description" content="TaxFilingHub offers a modern, user-friendly web presence for tax filing services.">
        <meta name="twitter:description" content="TaxFilingHub offers a modern, user-friendly web presence for tax filing services.">
        <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6282377-91a1-44bc-bba6-a3deb7a4d05d/id-preview-34cd63b4--91ab7770-3589-4093-897a-19b4af053ac1.lovable.app-1777023697736.png">
        <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6282377-91a1-44bc-bba6-a3deb7a4d05d/id-preview-34cd63b4--91ab7770-3589-4093-897a-19b4af053ac1.lovable.app-1777023697736.png">

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Laravel') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
