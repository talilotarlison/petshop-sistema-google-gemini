
document.addEventListener('DOMContentLoaded', function () {
    // --- Lógica de Geração da Tabela ---

    const tableBody = document.getElementById('table-body');
    const dataBase = [
        { id: '1,001', col2: 'random', col3: 'data', col4: 'placeholder', col5: 'visual', col6: 'layout', col7: 'text' },
        { id: '1,002', col2: 'placeholder', col3: 'irrelevant', col4: 'visual', col5: 'dashboard', col6: 'tabular', col7: 'data' },
        { id: '1,003', col2: 'data', col3: 'rich', col4: 'information', col5: 'illustrative', col6: 'data', col7: 'dashboard' },
        { id: '1,004', col2: 'information', col3: 'placeholder', col4: 'tabular', col5: 'illustrative', col6: 'data', col7: 'tabular' },
        { id: '1,005', col2: 'text', col3: 'random', col4: 'layout', col5: 'dashboard', col6: 'placeholder', col7: 'text' },
    ];

    const numRows = 25; // Número de linhas a gerar

    for (let i = 0; i < numRows; i++) {
        const baseIndex = i % dataBase.length;
        const rowData = dataBase[baseIndex];
        const idNumber = 1001 + i;
        // Formata o ID como "1.001"
        const idFormatted = String(idNumber).padStart(4, '0').slice(0, 1) + '.' + String(idNumber).slice(1);

        // Cria a linha (tr)
        const row = document.createElement('tr');

        // Cria e preenche as células (td)
        row.innerHTML = `
                    <td>${idFormatted}</td>
                    <td>${rowData.col2}</td>
                    <td>${rowData.col3}</td>
                    <td>${rowData.col4}</td>
                    <td>${rowData.col5}</td>
                    <td>${rowData.col6}</td>
                    <td>${rowData.col7}</td>
                `;

        tableBody.appendChild(row);
    }

    // --- Lógica de Responsividade (Sidebar Toggle) ---

    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');

    // Verifica o tamanho inicial da tela
    if (window.innerWidth <= 768) {
        menuButton.style.display = 'block';
    }

    // Adiciona listener para redimensionamento da tela
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
        } else {
            menuButton.style.display = 'none';
            sidebar.classList.remove('open'); // Garante que feche em desktop
        }
    });

    // O toggle da sidebar está no HTML do botão 'menu-button'
});
