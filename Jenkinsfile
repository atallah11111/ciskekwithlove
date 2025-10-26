pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "my-react-app:latest"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/atallah11111/ciskekwithlove.git'
                    // credentialsId: 'github-pat' // aktifkan jika repo private
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %DOCKER_IMAGE% .'
            }
        }
        stage('Run Container') {
            steps {
                bat 'docker rm -f react-container || exit 0'
                bat 'docker run -d -p 3000:80 --name react-container %DOCKER_IMAGE%'
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
