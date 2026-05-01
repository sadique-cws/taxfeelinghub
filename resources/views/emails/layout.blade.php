<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #eee; border-radius: 8px; overflow: hidden; }
        .header { background-color: #0c1c38; padding: 30px; text-align: center; }
        .header h1 { color: #D4AF37; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 40px; }
        .footer { background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #888; }
        .button { display: inline-block; padding: 12px 24px; background-color: #D4AF37; color: #000; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 20px; }
        .meta { font-size: 11px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; }
    </style>
</head>
<body>
    <div className="container">
        <div className="header">
            <h1>Tax Filing Hub</h1>
        </div>
        <div className="content">
            @yield('content')
        </div>
        <div className="footer">
            <p>&copy; {{ date('Y') }} Tax Filing Hub. All rights reserved.</p>
            <p>Financial • Legal • Advisory</p>
        </div>
    </div>
</body>
</html>
