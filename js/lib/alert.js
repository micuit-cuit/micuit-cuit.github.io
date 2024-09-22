function alert(message) {
    //crée une popup en haut de la page avec le message d'alerte
    let alertBody = document.getElementById('alertBody');
    if (!alertBody) {
        alertBody = document.createElement('div');
        alertBody.id = 'alertBody';
        alertBody.style = `
            position: fixed;
            top: 0;
            right: 0;
            z-index: 10000;
        `;
        document.body.appendChild(alertBody);
    }
    //crée un élément div pour le message
    let alertMessage = document.createElement('div');
    alertMessage.style = `
        background-color: #f00;
        color: #fff;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
        transform: translateX(0) translateY(-1000%);
        transition: all 0.2s;
    `;
    setTimeout(function() {
        alertMessage.style.transform = 'translateX(0) translateY(0)';
    }, 200);
    alertMessage.innerText = message;
    //ajoute le message à la popup
    alertBody.appendChild(alertMessage);
    //supprime le message après 5 secondes
    const timeOUT= setTimeout(function() {
        alertMessage.style.transform = 'translateX(100%) rotate(10deg)';
        setTimeout(function() {
            alertBody.removeChild(alertMessage);
        }, 200);
    }, 2500);
    alertMessage.addEventListener('click', function() {
        alertMessage.style.transform = 'translateX(100%) rotate(10deg)';
        clearTimeout(timeOUT);
        setTimeout(function() {
            alertBody.removeChild(alertMessage);
        }, 200);
    });
}
window.alert = alert;