Feature: Login Loja saucedemo

    Background:
        Given que eu acesso a pagina saucedemo

    Scenario Outline: Acessar com user OK
        When realizo login usuario '<user>' '<pass>'
        Then verifico o usuario logado

        Examples:
            | user                    | pass         |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |

    Scenario Outline: Acessar com NOK
        When realizo login usuario '<user>' '<pass>'
        Then verifico a mensagem de validacao '<mensagem>'

        Examples:
            | user            | pass         | mensagem                                            |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
