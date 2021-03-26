
Ext.define('MyApp.view.main.MainView',{
    extend: 'Ext.container.Viewport',

    baseCls: 'auth-locked',
    
    requires: [
        'MyApp.view.main.MainViewController',
        'MyApp.view.main.MainViewModel'
    ],

    controller: 'main-mainview',
    viewModel: {
        type: 'main-mainview'
    },

    html: '<section class="animated-background">'+
        '<div id="stars1"></div>'+
        '<div id="stars2"></div>'+
        '<div id="stars3"></div>'+
    '</section>',

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'top'
    },

    items: [{
        xtype: 'component',
        flex: 1,
        margin: '10 0 0 0',
        html: '<a id="profilePicture" href="#popup">' +
            '<img src="resources/images/myprofile.jpg" alt="Profile Picture">'+
        '</a>'+
        '<div class="overlay" id="popup">'+
            '<div class="popup">'+
                '<div class="popup-photo">'+
                    '<a href="resources/images/myprofile.jpg" target="_blank">'+
                        '<img src="resources/images/myprofile.jpg" alt="Profile Picture">'+
                    '</a>'+
                '</div>'+
                '<div class="popup-quote">'+
                    'I\'m a software developer and I work on a variety of projects with different frameworks and environments.'+
                '</div>'+

                '<a class="popup-close" onclick="history.back()">&times;</a>'+
            '</div>'+
        '</div>'+
        '<div id="userName">'+
            'Rifki Heruprasetyo'+
        '</div>'+
        '<div id="userTagline">'+
            'Software Developer, web development, android apps and more.'+
        '</div>'+
        '<div id="links">'+
            '<a class="link" href="https://github.com/rifkihp" target="_blank"><i class="fab fa-github">&nbsp;</i>Github</a>'+
            //'<a class="link" href="https://www.linkedin.com/in/johnemerson1406" target="_blank"><i class="fab fa-linkedin">&nbsp;</i>Linkedin</a>'+
            '<a class="link" href="https://www.facebook.com/rifkiherup" target="_blank"><i class="fab fa-facebook">&nbsp;</i>Facebook</a>'+
            '<a class="link" href="https://www.instagram.com/rifkiherup" target="_blank"><i class="fab fa-instagram">&nbsp;</i>Instagram</a>'+
            '<a class="link" href="https://twitter.com/RHeruprasetyo" target="_blank"><i class="fab fa-twitter">&nbsp;</i>Twitter</a>'+
            '<a class="link" href="https://www.youtube.com/channel/UCpo2SozvE57mVcvbCBiyixw" target="_blank"><i class="fab fa-youtube">&nbsp;</i>Belajar Koding</a>'+
        '</div>'
    }, {
        xtype: 'component',
        html: '<div id="hashtag">'+
            'Made with ❤ in Jakarta by Rifki using ExtJs'+
        '</div>'
    }]
});
