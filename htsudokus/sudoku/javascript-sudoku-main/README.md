<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- mobile status bar color -->
    <meta name="theme-color" content="#fff">
    <title>Sudoku</title>
    <link rel="shortcut icon" href="./static/images/SUDOKU_ICON.png" type="image/x-icon">
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet">
    <!-- box icons -->
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <!-- app css -->
    <link rel="stylesheet" href="./app.css">
    <link href="https://fonts.googleapis.com/css2?family=Potta+One&family=Poppins:wght@400;600&display=swap"
        rel="stylesheet">

    <audio id="confusingSound" src="./AudioFile/notification_tone.wav"></audio>



</head>

<body>

    <!-- top nav -->
    <nav>
        <div class="nav-container">
            <a href="#" class="nav-logo">
                Sudoku
            </a>
            <div class="dark-mode-toggle" id="dark-mode-toggle">
                <i class="bx bxs-sun"></i>
                <i class="bx bxs-moon"></i>
            </div>
        </div>
    </nav>
    <!-- end top nav -->

    <!-- main -->
    <div class="main">
        <div class="screen">
            <!-- start screen -->
            <div class="start-screen active" id="start-screen">
                <input type="text" placeholder="Your name" maxlength="11" class="input-name" id="input-name">
                <div class="btn" id="btn-level">
                    Easy
                </div>
                <div class="btn" id="btn-continue">Continue</div>
                <div class="btn btn-blue" id="btn-play">New Game</div>
            </div>
            <!-- end start screen -->




            <!-- game screen -->
            <div class="main-game" id="game-screen">

                <div class="main-sudoku-grid">
                    <!-- 81 cells -->
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                </div>

                <div class="main-game-info">
                    <div class="main-game-info-box main-game-info-name">
                        <span id="player-name">tuat</span>
                    </div>
                    <div class="main-game-info-box main-game-info-level">
                        <span id="game-level">Easy</span>
                    </div>
                </div>

                <div class="main-game-info-box main-game-info-time">
                    <span id="game-time">10:20</span>
                    <div class="pause-btn" id="btn-pause">
                        <i class="bx bx-pause"></i>
                    </div>
                </div>

                <div class="numbers">
                    <div class="number">1</div>
                    <div class="number">2</div>
                    <div class="number">3</div>
                    <div class="number">4</div>
                    <div class="number">5</div>
                    <div class="number">6</div>
                    <div class="number">7</div>
                    <div class="number">8</div>
                    <div class="number">9</div>
                    <div class="delete" id="btn-delete">X</div>
                </div>
            </div>
            <!-- end game screen -->



            <div class="random-message random-message-bottom-right" id="random-message-bottom-right"></div>





            <!-- pause screen -->
            <div class="pause-screen" id="pause-screen">
                <div class="btn btn-blue" id="btn-resume">Resume</div>
                <div class="btn" id="btn-new-game">New Game</div>
            </div>
            <!-- end pause screen -->

            <!-- result screen -->
            <div class="result-screen" id="result-screen">
                <div class="congrate">Competed</div>
                <div class="info">Time</div>
                <div id="result-time"></div>
                <div class="btn" id="btn-new-game-2">New Game</div>
            </div>
            <!-- end result screen -->
        </div>
    </div>
    <!-- end main -->

    <script src="./static/js/constant.js"></script>
    <script src="./static/js/sudoku.js"></script>
    <script src="./static/js/app.js"></script>
</body>

</html># javascript-sudoku

    Make Sudoku Game With HTML CSS JavaScript

# Video tutorial

    https://youtu.be/xpsm3tOLTVE

# Resource

    Google font: https://fonts.google.com/

    Boxicons: https://boxicons.com/

    Images: https://unsplash.com/

# Preview

!["Make Sudoku Game With HTML CSS JavaScript"](https://user-images.githubusercontent.com/67447840/135793517-57b1d971-67c5-4561-bd70-43f26998a108.jpg "Make Sudoku Game With HTML CSS JavaScript")