import os

env = os.environ

config = {
    "database_url": f"{env['DB_DIALECT']}://{env['DB_USER']}:{env['DB_PASSWORD']}@{env['DB_HOST']}:{env['DB_PORT']}/{env['DB_NAME']}",
}
