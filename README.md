Ronnie D'Souza
COMP 4350 Assignment

Github repo:  
https://github.com/RonnieDsouza/react-soflo

The docker image is at:  
https://hub.docker.com/layers/ronnieds/soflo/latest/images/sha256-6d6407b8a2de525924925cea92b72ebd5e232c7624028266abaa578e1fead28c?context=explore

Alternatively use:  
docker pull ronnieds/soflo:latest

My app is implemented using React.js. 
The app uses the stck exchange API to make calls to receive the information it needs which is then displayed. 
The search term recieved in the input field is used to find questions with the specified tag. 
The results are then received and the dates are converted to human readable dates. 

HOW TO RUN  
docker pull ronnieds/soflo:latest
docker run -p 3000:3000 c18bfb32d118
then go to http://localhost:3000

TO SEARCH  
type in a tag eg: 'vim'
you will find the top questions for that tag