# Explicação de como rodar o Deploy

## Requisitos:

- SO: Ubuntu versão > 18.0 ou derivações do Debian
- Ter ansible instalado v-2.10
- Ter aws cli instalado
- Ter pytho3 instalado
- Ter as credenciais setadas na região us-east-1 ( de preferência ter uma credencial com permissões de administrador )
- Seria ideal ter o docker já pré instalado, mas se não tiver o ansible irá tentar instalar

*obs: Se quiser customizar a região ou outras coisas, altere em `ansible/roles/create_infra/vars/main.yml` e em `ansible/roles/build_aplication/vars/main.yml`*
## Setar Credenciais da AWS:

- Setar credenciais

```shell
aws configure
```

## Rodar:

- Vá para pasta ansible

```shell
cd ansible
```

- Rode o playbook

```shell
sudo ansible-playbook -i hosts main.yaml
```
