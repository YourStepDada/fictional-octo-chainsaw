function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qFEbO4XSG/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
    

        if(results[0].label == "Cat") {
            img.src = 'catgif.gif';
            img1.src = 'png-transparent-cheems-dog-thumbnail-removebg-preview.png';
            img2.src = 'lion-walking-isolated-transparent-background_879541-402-removebg-preview.png';
            img3.src = 'horse-running-isolated-transparent-background_879541-369-removebg-preview.png';
        } else if(results[0].label == "Dog") {
            img.src = 'png-transparent-cheems-dog-thumbnail-removebg-preview.png';
            img1.src = 'doggif.gif';
            img2.src = 'horse-running-isolated-transparent-background_879541-369-removebg-preview.png';
            img3.src = 'lion-walking-isolated-transparent-background_879541-402-removebg-preview.png';
        } else if(results[0].label == "Horse") {
            img.src = 'png-transparent-cheems-dog-thumbnail-removebg-preview.png';
            img1.src = 'pngtree-a-squatting-tabby-cat-png-image_2664942-removebg-preview.png';
            img2.src = 'horse.gif';
            img3.src = 'lion-walking-isolated-transparent-background_879541-402-removebg-preview.png';
        } else  if(results[0].label == "Lion") {
            img.src = 'png-transparent-cheems-dog-thumbnail-removebg-preview.png';
            img1.src = 'pngtree-a-squatting-tabby-cat-png-image_2664942-removebg-preview.png';
            img2.src = 'liongif.gif';
            img3.src = 'horse-running-isolated-transparent-background_879541-369-removebg-preview.png';
        }    
    }
    
}
