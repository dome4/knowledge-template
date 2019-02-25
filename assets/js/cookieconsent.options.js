window.addEventListener("load", function(){
    var p;
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#d5dadd",
                "text": "#5f676d"
            },
            "button": {
                "background": "#f67878",
                "text": "#ffffff"
            }
        },
        "theme": "classic",
        "type": "opt-out",
        "content": {
            "message": "Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu.\nWeitere Informationen zu Cookies erhalten Sie in unserer",
            "deny": "Ablehnen",
            "allow": "Akzeptieren",
            "link": "Datenschutzerklärung",
            "href": "/privacy.html",
            "policy" : "Cookie Einstellungen"
        },
        revokable: false,
        animateRevokable: false,
        onStatusChange: function(status, chosenBefore) {
            var type = this.options.type;
            var didConsent = this.hasConsented();
            if (type == 'opt-out' && !didConsent) {
                // disable cookies
                gaOptout();
            }
            if (type == 'opt-out' && didConsent) {
                // enable cookies
                gaOptin();
            }
        }
    }, function (popup) {
        p = popup;
    });

    // add event listener for custom button
    window.document.getElementById('revokeBtn-trigger').addEventListener('click', function() {
        p.revokeChoice();
    });
});