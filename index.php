<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Productly</title>
    <meta name="description" content="">
    <link rel="stylesheet" href="css/main.css">
</head>

<body class="body theme1">
    <div class="design-model">
        <img src="media/design.webp" alt="">
    </div>


    <div class="page">
        <header class="header">
            <a href="/">
                <?php
            include 'svg/logo_txt.svg';?>
                <img class="logo" src="media/logo_lambda1.svg" alt="Logo Lambda" />
                <span class="logo_text">Productly</span>
            </a>
            <nav class="main-menu">
                <ul>
                    <li class="menu-item">
                        <a class="link" href=#>Product</a>
                    </li>
                    <li class="menu-item active">
                        <a class="link" href=#>Customers</a>
                    </li>
                    <li class="menu-item">
                        <a class="link" href=#>Pricing</a>
                    </li>
                    <li class="menu-item">
                        <a class="link" href=#>Resources</a>
                    </li>
                    <li class="menu-item special">
                        <a class="link" href=#>Sign In</a>
                    </li>
                    <li class="menu-item special">
                        <a class="link" href=#>Sign Up</a>
                    </li>
                </ul>
            </nav>
        </header>

        <section class="introduction">
            <h1 class="h1">The Design Thinking superpowers</h1>
            <p class="baseline">Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
            <div class="call-to-action">
                <button class="button get-started">Get started</button>
                <button class="button watch-video">Watch the Video</button>
            </div>
            <?php include 'svg/picture0.svg'; ?>
        </section>

        <section class="features">
            <h2 class="h2">We design tools to unveil your superpowers</h2>
            <ul class="features_list">
                <li class="feature_item">
                    <span class="feature_title">First click tests</span>
                    <p>While most people enjoy casino gambling.</p>
                </li>
                <li class="feature_item">
                    <span class="feature_title">First click tests</span>
                    <p>While most people enjoy casino gambling.</p>
                </li>
                <li class="feature_item">
                    <span class="feature_title">First click tests</span>
                    <p>While most people enjoy casino gambling.</p>
                </li>
                <li class="feature_item">
                    <span class="feature_title">First click tests</span>
                    <p>While most people enjoy casino gambling.</p>
                </li>
            </ul>
            <div class="call-to-action">
                <button class="button sign-up-now">Sign up now</button>
            </div>
        </section>

        <main class="main">

            <section class="section design-professionals">
                <h2 class="title">
                    <span class="small">Effortless Validation for</span>
                    Design Professionals
                </h2>
                <div class="text">
                    <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                    <h3>Accessory makers</h3>
                    <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                    <h3>Alterationists</h3>
                    <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                    <h3>Custom Design designers</h3>
                    <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                </div>
                <div class="illustration">
                    <?php // include 'svg/picture1.svg'; ?>
                    <img class="svg-picture" src="svg/picture1.svg" alt="">
                </div>
            </section>

            <section class="super-heroes">
                <h2>Need a super hero?</h2>
                <p>Do you require some help for your project: Conception workshop,<br>
                prototyping, marketing strategy, landing page, Ux/UI?</p>
                <div class="call-to-action">
                    <button class="button get-started">Get started</button>
                    <button class="button watch-video">Watch the Video</button>
                </div>
            </section>

            <section class="slideshow"></section>

        </main>

        <footer class="footer">
            <div class="footer_logo"></div>
            <div class="quick-links"></div>
            <div class="legal-stuff"></div>
            <div class="call-to-action">
                <p>knowing you're always on the best energy deal.</p>
                <input type="text" placeholder="Enter your phone Number">
                <button class="button sign-up-now">Sign up Now</button>
            </div>
        </footer>
    </div>

    <script src="js/main.js"></script>
</body>

</html>
    