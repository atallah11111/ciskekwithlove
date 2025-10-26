pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "my-react-app:latest"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/username/react-project.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        stage('Run Container') {
            steps {
                // Stop existing container (optional)
                sh 'docker rm -f react-container || true'
                sh 'docker run -d -p 3000:80 --name react-container $DOCKER_IMAGE'
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
