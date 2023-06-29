const regions = [
    {sigla: 'BR', name: 'Brasil'},
    { sigla: 'AC', name: 'Acre' },
    { sigla: 'AL', name: 'Alagoas' },
    { sigla: 'AM', name: 'Amazonas' },
    { sigla: 'AP', name: 'Amapá' },
    { sigla: 'BA', name: 'Bahia' },
    { sigla: 'CE', name: 'Ceará' },
    { sigla: 'DF', name: 'Distrito Federal' },
    { sigla: 'ES', name: 'Espírito Santo' },
    { sigla: 'GO', name: 'Goiás' },
    { sigla: 'MA', name: 'Maranhão' },
    { sigla: 'MG', name: 'Minas Gerais' },
    { sigla: 'MS', name: 'Mato Grosso do Sul' },
    { sigla: 'MT', name: 'Mato Grosso' },
    { sigla: 'PA', name: 'Pará' },
    { sigla: 'PB', name: 'Paraíba' },
    { sigla: 'PE', name: 'Pernambuco' },
    { sigla: 'PI', name: 'Piauí' },
    { sigla: 'PR', name: 'Paraná' },
    { sigla: 'RJ', name: 'Rio de Janeiro' },
    { sigla: 'RN', name: 'Rio Grande do Norte' },
    { sigla: 'RO', name: 'Rondônia' },
    { sigla: 'RR', name: 'Roraima' },
    { sigla: 'RS', name: 'Rio Grande do Sul' },
    { sigla: 'SC', name: 'Santa Catarina' },
    { sigla: 'SE', name: 'Sergipe' },
    { sigla: 'SP', name: 'São Paulo' },
    { sigla: 'TO', name: 'Tocantins' }
];

export default function RegionField() {
    return (
        <select id="regions" name='regions'>
            {regions.map(regionName => {
                return (
                    <option value={regionName.sigla} key={regionName.sigla}>
                        {regionName.name}
                    </option>
                )
            })}
        </select>
    )
}