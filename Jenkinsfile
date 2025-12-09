pipeline {
	agent any

	environment {
		ANSIBLE_HOST_KEY_CHECKING = "False"
	}

	stages {

		stage('Checkout') {
			steps {
				git branch: 'main',
				url: 'git@github.com:projetdevops12/devops.git',
				credentialsId: 'b1019cce-5ffa-4348-8c2e-e4f26ab35bc1'
			}
		}

		stage('Install Dependencies') {
			steps {
				// Installer toutes les dépendances depuis la racine
				sh 'npm install'
				sh 'npm install --prefix server'
			}
		}

		stage('Build Frontend') {
			steps {
				// Générer le build frontend dans client/dist
				sh 'npm run build'
			}
		}

		stage('Deploy to VPS') {
			steps {
				// Déployer sur le VPS via Ansible
				ansiblePlaybook(
					playbook: '/etc/ansible/deploy.yml',
					inventory: '/etc/ansible/hosts',
					extras: '-e "frontend_build_src=${WORKSPACE}/client/dist"'
				)
			}
		}
	}

	post {
		success {
			echo "Déploiement réussi !"
		}
		failure {
			echo "Échec du déploiement."
		}
	}
}
