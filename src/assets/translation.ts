import { Injectable } from '@angular/core';

import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';

import ptNumbers from 'cldr-data/main/pt/numbers.json';
import ptGregorian from 'cldr-data/main/pt/ca-gregorian.json';
import ptTimezoneData from 'cldr-data/main/pt/timeZoneNames.json';
import ptCurrenciesData from 'cldr-data/main/pt/currencies.json';
import ptDateFields from 'cldr-data/main/pt/dateFields.json';
import supplementalData from 'cldr-data/supplemental/numberingSystems.json';
@Injectable({
  providedIn: 'root'
})

export class TranslationService {

  constructor() {
    loadCldr(
      supplementalData,
      ptNumbers,
      ptGregorian,
      ptCurrenciesData,
      ptDateFields,
      ptTimezoneData
    );
    this.loadLocalization();
  }

  loadLocalization(): void {
    setCulture('pt-BR');

    L10n.load({
      'pt-BR': {
        'grid': {
          'EmptyRecord': 'Nenhum registro encontrado',
          'True': 'Verdadeiro',
          'False': 'Falso',
          'InvalidFilterMessage': 'Entrada de filtro inválida',
          'GroupDropArea': 'Arraste um cabeçalho de coluna aqui para agrupar sua coluna',
          'UnGroup': 'Clique aqui para desagrupar',
          'Item': 'item',
          'Items': 'itens',
          'FilterButton': 'Filtrar',
          'ClearButton': 'Limpar',
          "Equal": "Igual",
          "NotEqual": "Não igual",
          "LessThan": "Menor que",
          "GreaterThan": "Maior que",
          "LessThanOrEqual": "Menor ou igual a",
          "GreaterThanOrEqual": "Maior ou igual a",
          "StartsWith": "Começa com",
          "EndsWith": "Termina com",
          "Contains": "Contém",
          "DoesNotStartWith": "Não começa com",
          "DoesNotEndWith": "Não termina com",
          "DoesNotContain": "Não contém",
          "IsNotNull": "Não é nulo",
          "IsNull": "É nulo",
          "ClearFilter": "Limpar filtro",
          "FilterMenu": "Menu de filtro",
          "ChooseDate": "Escolha uma data",
          "EnterValue": "Inserir valor",
          "MatchCase": "Diferenciar maiúsculas de minúsculas",
          "ApplyFilter": "Aplicar filtro",
          'EditOperationAlert': 'Nenhum registro selecionado para a operação de edição',
          'DeleteOperationAlert': 'Nenhum registro selecionado para a operação de exclusão',
          'Copy': 'Copiar',
          'Group': 'Agrupar por esta coluna',
          'Ungroup': 'Desagrupar por esta coluna',
          'autoFitAll': 'Auto ajustar todas as colunas',
          'autoFit': 'Auto ajustar esta coluna',
          'Export': 'Exportar',
          'FirstPage': 'Primeira página',
          'LastPage': 'Última página',
          'NextPage': 'Próxima página',
          'PreviousPage': 'Página anterior',
          'SortAscending': 'Ordenar Ascendente',
          'SortDescending': 'Ordenar Descendente',
          'SaveButton': 'Salvar',
          'OKButton': 'OK',
          'CancelButton': 'Cancelar',
          'EditFormTitle': 'Detalhes do ',
          'AddFormTitle': 'Adicionar novo registro',
          'BatchSaveConfirm': 'Tem certeza de que deseja salvar as alterações?',
          'BatchSaveLostChanges': 'As alterações não salvas serão perdidas. Tem certeza de que deseja continuar?',
          'CancelEdit': 'Tem certeza de que deseja cancelar as alterações?',
          'ChooseColumns': 'Escolher coluna',
          'SearchColumns': 'colunas de pesquisa',
          'Matchs': 'Nenhuma correspondência encontrada',
        },
        'datepicker': {
          'today': 'Hoje',
        },
        'months': {
          'names': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          'namesAbbr': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        },
        'pager': {
          'currentPageInfo': '{0} de {1} páginas',
          'totalItemsInfo': '({0} itens)',
          'firstPageTooltip': 'Ir para a primeira página',
          'lastPageTooltip': 'Ir para a última página',
          'nextPageTooltip': 'Ir para a próxima página',
          'previousPageTooltip': 'Ir para a página anterior',
          'nextPagerTooltip': 'Ir para o próximo pager',
          'previousPagerTooltip': 'Ir para o pager anterior',
        },
      }
    });
  }
}