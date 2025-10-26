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
                bat 'docker run -d -p 8081:8081 --name react-container %DOCKER_IMAGE%'
            }
        }
    } // <-- tutup stages
    post {
        always {
            echo 'Pipeline finished.'
        }
    } // <-- tutup post
} // <-- tutup pipeline
