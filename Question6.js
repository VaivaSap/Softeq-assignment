/*Write a regular expression to match strings containing both "Softeq" and "#rules" in any order.*/

new RegExp(/^(?=.*Softeq)(?=.*#rules).*$/);