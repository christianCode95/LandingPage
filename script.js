      function IrParaInscricao() {
            document.getElementById('call-to-action').scrollIntoView({ behavior: 'smooth' });
        }
        
        function SelecionarPlano(plano) {
            alert('Você selecionou o plano ' + plano + '. Redirecionando para o formulário...');
            document.getElementById('call-to-action').scrollIntoView({ behavior: 'smooth' });
        }
        
        function FazerLogin() {
            const form = document.getElementById('formInscricao');
            if (form.checkValidity()) {
                alert('Inscrição realizada com sucesso! Redirecionando para o pagamento...');
            } else {
                alert('Por favor, preencha todos os campos corretamente.');
            }
        }