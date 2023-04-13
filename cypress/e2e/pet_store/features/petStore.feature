Feature: Login usuarios OK

    Scenario Outline: Acessar com user OK 2
        Given realizo login usuario '<user>' '<pass>' 2
        When crio um novo usuario
        Then atualizo o usuario
        And deleto o usuario

        Examples:
            | user        | pass    |
            | Userpetname | passPet |


    Scenario Outline: Acessar com user OK 2
        Given realizo login usuario '<user>' '<pass>' 2
        When crio um novo usuario com array
        Then valido o usuario criados com array

        Examples:
            | user        | pass    |
            | Userpetname | passPet |