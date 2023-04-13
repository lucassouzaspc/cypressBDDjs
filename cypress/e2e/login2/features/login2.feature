Feature: Login Loja saucedemo 2

    Background:
        Given que eu acesso a pagina saucedemo 2

    Scenario Outline: Acessar com user OK 2
        When realizo login usuario '<user>' '<pass>' 2
        Then verifico o usuario logado 2

        Examples:
            | user                    | pass         |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |

    Scenario Outline: Acessar com NOK 2
        When realizo login usuario '<user>' '<pass>' 2
        Then verifico a mensagem de validacao '<mensagem>' 2

        Examples:
            | user            | pass         | mensagem                                            |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
