# Explicação de como rodar o Deploy

## Requisitos:

- SO: Ubuntu versão > 18.0 ou derivações do Debian 
- Ter ansible instalado v-2.10
- Ter aws cli instalado
- Ter pytho3 instalado

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
