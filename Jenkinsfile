pipeline {
    agent any

    environment {
        DEPLOY_USER = "debian"                     // utilisateur sur le VPS
        DEPLOY_HOST = "maastricht.ovh"            // adresse de ton VPS
        DEPLOY_PATH = "/var/www/devops"           // dossier cible sur le VPS
        PM2_APP_NAME = "projetdevops"             // nom de l’application PM2
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:projetdevops12/devops.git', credentialsId: 'b1019cce-5ffa-4348-8c2e-e4f26ab35bc1'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['b1019cce-5ffa-4348-8c2e-e4f26ab35bc1']) {
                    sh """
                    # Copie le front buildé
                    rsync -avz --delete ./client/dist/ ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/client/dist/

                    # Copie le backend
                    rsync -avz --delete ./server/ ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/server/

                    # Redémarre l'application PM2
                    ssh ${DEPLOY_USER}@${DEPLOY_HOST} "pm2 restart ${PM2_APP_NAME} || pm2 start ${DEPLOY_PATH}/server/src/index.js --name ${PM2_APP_NAME}"
                    """
                }
            }
        }
    }

    post {
        success {
            echo '✅ Déploiement réussi !'
        }
        failure {
            echo '❌ Erreur dans le pipeline.'
        }
    }
}
