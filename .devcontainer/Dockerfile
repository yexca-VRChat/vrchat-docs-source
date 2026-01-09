FROM node:24-alpine

# 常用工具（git 必装；bash 可选但方便）
RUN apk add --no-cache \
    git curl openssh-client

# 可选：部分 npm 包在 alpine 上会需要兼容层（看你装的依赖情况）
# RUN apk add --no-cache libc6-compat

# Node 官方镜像自带 node 用户（uid=1000），用它开发更舒服
USER node

WORKDIR /workspaces
