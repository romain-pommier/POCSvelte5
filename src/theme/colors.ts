const energyTransition = '#036C48';
const realEstate = '#035C6C';
const health = '#FFcD07';
const occitanSavings = 'hsl(1, 76%, 38%)';
const funds = 'hsl(0, 0%, 77%)';

const info = '#096AF2';
const warning = '#AF6A01';
const danger = '#C62929';
const error = danger;
const success = '#1EAA31';

const eggshell = '#F5F4F0';

const decisionToolA = success;
const decisionToolB = info;
const decisionToolC = warning;
const decisionToolD = '#ED907C';
const decisionToolE = danger;

const stocks = '#2da671';
const bonds = '#014d42';
const equityShares = '#000';
const aifShares = '#C4C4C4';
const donations = '#E6E6E6';
const socialShares = '#65e079';

const enSuivi = '#EBF3FF';
const prorogationEnCours = '#AECFFF';
const negociationsEnCours = '#6CA5FA';
const preContentieux = '#FFE88D';
const contentieux = '#F5D140';
const sortiePositive = '#AFE9A5';
const sortieNegative = '#A0AC9E';

export const colors = {
	dashboardBg: '#F9FAFB',

	'energy-transition': {
		light: '#e6f0ed',
		DEFAULT: energyTransition
	},
	'real-estate': {
		light: '#e6eff0',
		DEFAULT: realEstate
	},
	health: {
		light: '#fffae6',
		DEFAULT: health
	},
	funds: {
		light: 'hsl(0, 0%, 90%)',
		DEFAULT: funds
	},
	'tech-and-innovation': {
		DEFAULT: funds
	},
	purple: {
		light: '#ded3fd',
		DEFAULT: '#a582f8'
	},
	premium: {
		light: '#D0DDFB',
		DEFAULT: info
	},
	eggshell: eggshell,

	success: {
		light: '#DBFAD1',
		DEFAULT: success
	},

	warning: {
		light: '#FBEFC9',
		DEFAULT: warning
	},

	info: {
		light: '#CDEAFE',
		DEFAULT: info
	},

	error: {
		light: '#FCE2D4',
		DEFAULT: error
	},

	danger: {
		light: '#FCE2D4',
		DEFAULT: danger
	},

	charts: {
		'chart-1': '#036c48',
		'chart-2': '#1c7b5a',
		'chart-3': '#35896d',
		'chart-4': '#4f987f',
		'chart-5': '#68a791',
		'chart-6': '#81b6a4',
		'chart-7': '#9ac4b6',
		'chart-8': '#b3d3c8',
		'chart-9': '#cde2da'
	},

	'decision-tool-A': decisionToolA,
	'decision-tool-B': decisionToolB,
	'decision-tool-C': decisionToolC,
	'decision-tool-D': decisionToolD,
	'decision-tool-E': decisionToolE,
	stocks: stocks,
	bonds: bonds,
	'equity-shares': equityShares,
	'aif-shares': aifShares,

	// Status Label colors
	'en-suivi': enSuivi,
	'prorogation-en-cours': prorogationEnCours,
	'negociation-en-cours': negociationsEnCours,
	'pre-contentieux': preContentieux,
	contentieux: contentieux,
	'sortie-positive': sortiePositive,
	'sortie-negative': sortieNegative,

	donations: donations,
	'social-shares': socialShares
};

export const getBgColorClassName = (string: string): string => {
	if (string === 'health') {
		return 'bg-health';
	} else if (string === 'energy-transition') {
		return 'bg-energy-transition';
	} else if (string === 'real-estate') {
		return 'bg-real-estate';
	} else if (string === 'stocks') {
		return 'bg-stocks';
	} else if (string === 'bonds') {
		return 'bg-bonds';
	} else if (string === 'equity-shares') {
		return 'bg-equity-shares';
	} else if (string === 'aif-shares') {
		return 'bg-aif-shares';
	} else if (string === 'donations') {
		return 'bg-donations';
	} else if (string === 'social-shares') {
		return 'bg-social-shares';
	} else if (string === 'occitan-savings') {
		return 'bg-occitan-savings';
	} else if (string === 'funds' || string === 'tech-and-innovation') {
		return 'bg-funds';
	} else if (string === 'decision-tool-A') {
		return 'bg-decision-tool-A';
	} else if (string === 'decision-tool-B') {
		return 'bg-decision-tool-B';
	} else if (string === 'decision-tool-C') {
		return 'bg-decision-tool-C';
	} else if (string === 'decision-tool-D') {
		return 'bg-decision-tool-D';
	} else if (string === 'decision-tool-E') {
		return 'bg-decision-tool-E';
	} else if (string === 'beige') {
		return 'bg-beige';
	} else if (string === 'sand') {
		return 'bg-sand';
	} else if (string === 'eggshell') {
		return 'bg-eggshell';
	} else if (string === 'danger') {
		return 'bg-danger';
	} else if (string === 'error') {
		return 'bg-error';
	} else if (string === 'info') {
		return 'bg-info';
	} else if (string === 'white') {
		return 'bg-white';
	} else if (string === 'black') {
		return 'bg-black';
	} else if (string === 'primary') {
		return 'bg-primary';
	} else if (string === 'secondary') {
		return 'bg-secondary';
	} else if (string === 'warning') {
		return 'bg-warning';
	} else if (string === 'warning-light') {
		return 'bg-warning-light';
	} else if (string === 'purple') {
		return 'bg-purple';
	} else if (string === 'en_suivi') {
		return 'bg-en-suivi';
	} else if (string === 'collecte_en_cours') {
		return 'bg-premium-light';
	} else if (string === 'cloture_en_cours') {
		return 'bg-premium-light';
	} else if (string === 'prorogation_en_cours') {
		return 'bg-prorogation-en-cours';
	} else if (string === 'analyse_prorogation') {
		return 'bg-purple-light';
	} else if (string === 'negociations_en_cours') {
		return 'bg-negociation-en-cours';
	} else if (string === 'pre_contentieux') {
		return 'bg-pre-contentieux';
	} else if (string === 'contentieux') {
		return 'bg-contentieux';
	} else if (string === 'sortie_negative') {
		return 'bg-sortie-negative';
	} else if (string === 'sortie_positive') {
		return 'bg-sortie-positive';
	} else {
		return 'bg-transparent';
	}
};
export const getMdBgColorClassName = (string: string): string => {
	if (string === 'health') {
		return 'md:bg-health';
	} else if (string === 'energy-transition') {
		return 'md:bg-energy-transition';
	} else if (string === 'real-estate') {
		return 'md:bg-real-estate';
	} else if (string === 'stocks') {
		return 'md:bg-stocks';
	} else if (string === 'bonds') {
		return 'md:bg-bonds';
	} else if (string === 'equity-shares') {
		return 'md:bg-equity-shares';
	} else if (string === 'aif-shares') {
		return 'md:bg-aif-shares';
	} else if (string === 'donations') {
		return 'md:bg-donations';
	} else if (string === 'social-shares') {
		return 'md:bg-social-shares';
	} else if (string === 'occitan-savings') {
		return 'md:bg-occitan-savings';
	} else if (string === 'funds') {
		return 'md:bg-funds';
	} else if (string === 'decision-tool-A') {
		return 'md:bg-decision-tool-A';
	} else if (string === 'decision-tool-B') {
		return 'md:bg-decision-tool-B';
	} else if (string === 'decision-tool-C') {
		return 'md:bg-decision-tool-C';
	} else if (string === 'decision-tool-D') {
		return 'md:bg-decision-tool-D';
	} else if (string === 'decision-tool-E') {
		return 'md:bg-decision-tool-E';
	} else if (string === 'beige') {
		return 'md:bg-beige';
	} else if (string === 'sand') {
		return 'md:bg-sand';
	}
};

export const getMdBorderColorClassName = (string: string): string => {
	if (string === 'health') {
		return 'md:border-health';
	} else if (string === 'energy-transition') {
		return 'md:border-energy-transition';
	} else if (string === 'primary') {
		return 'md:border-primary';
	} else if (string === 'real-estate') {
		return 'md:border-real-estate';
	} else if (string === 'stocks') {
		return 'md:border-stocks';
	} else if (string === 'bonds') {
		return 'md:border-bonds';
	} else if (string === 'equity-shares') {
		return 'md:border-equity-shares';
	} else if (string === 'aif-shares') {
		return 'md:border-aif-shares';
	} else if (string === 'donations') {
		return 'md:border-donations';
	} else if (string === 'social-shares') {
		return 'md:border-social-shares';
	} else if (string === 'occitan-savings') {
		return 'md:border-occitan-savings';
	} else if (string === 'funds') {
		return 'md:border-funds';
	} else if (string === 'warning') {
		return 'md:border-warning';
	} else if (string === 'decision-tool-A') {
		return 'md:border-decision-tool-A';
	} else if (string === 'decision-tool-B') {
		return 'md:border-decision-tool-B';
	} else if (string === 'decision-tool-C') {
		return 'md:border-decision-tool-C';
	} else if (string === 'decision-tool-D') {
		return 'md:border-decision-tool-D';
	} else if (string === 'decision-tool-E') {
		return 'md:border-decision-tool-E';
	}
};

export const getLightBgColorClassName = (string: string): string => {
	if (string === 'health') {
		return 'bg-health-light';
	} else if (string === 'energy-transition') {
		return 'bg-energy-transition-light';
	} else if (string === 'real-estate') {
		return 'bg-real-estate-light';
	} else if (string === 'stocks') {
		return 'bg-stocks-light';
	} else if (string === 'bonds') {
		return 'bg-bonds-light';
	} else if (string === 'equity-shares') {
		return 'bg-equity-shares-light';
	} else if (string === 'aif-shares') {
		return 'bg-aif-shares-light';
	} else if (string === 'donations') {
		return 'bg-donations-light';
	} else if (string === 'social-shares') {
		return 'bg-social-shares-light';
	} else if (string === 'occitan-savings') {
		return 'bg-occitan-savings-light';
	} else if (string === 'funds') {
		return 'bg-funds-light';
	} else if (string === 'decision-tool-A') {
		return 'bg-decision-tool-A-light';
	} else if (string === 'decision-tool-B') {
		return 'bg-decision-tool-B-light';
	} else if (string === 'decision-tool-C') {
		return 'bg-decision-tool-C-light';
	} else if (string === 'decision-tool-D') {
		return 'bg-decision-tool-D-light';
	} else if (string === 'decision-tool-E') {
		return 'bg-decision-tool-E-light';
	} else if (string === 'beige') {
		return 'bg-beige-light';
	} else if (string === 'sand') {
		return 'bg-sand-light';
	} else if (string === 'info') {
		return 'bg-info-light';
	} else if (string === 'success') {
		return 'bg-success-light';
	} else if (string === 'danger') {
		return 'bg-danger-light';
	} else if (string === 'warning') {
		return 'bg-warning-light';
	} else if (string === 'primary') {
		return 'bg-primary-light';
	} else if (string === 'secondary') {
		return 'bg-secondary-light';
	} else if (string === 'purple-light') {
		return 'bg-purple-light';
	}
};

export const getMdLightBgColorClassName = (string: string): string => {
	if (string === 'health') {
		return 'md:!bg-health-light';
	} else if (string === 'energy-transition') {
		return 'md:!bg-energy-transition-light';
	} else if (string === 'real-estate') {
		return 'md:!bg-real-estate-light';
	} else if (string === 'stocks') {
		return 'md:!bg-stocks-light';
	} else if (string === 'bonds') {
		return 'md:!bg-bonds-light';
	} else if (string === 'equity-shares') {
		return 'md:!bg-equity-shares-light';
	} else if (string === 'aif-shares') {
		return 'md:!bg-aif-shares-light';
	} else if (string === 'donations') {
		return 'md:!bg-donations-light';
	} else if (string === 'social-shares') {
		return 'md:!bg-social-shares-light';
	} else if (string === 'occitan-savings') {
		return 'md:!bg-occitan-savings-light';
	} else if (string === 'funds') {
		return 'md:!bg-funds-light';
	} else if (string === 'decision-tool-A') {
		return 'md:!bg-decision-tool-A-light';
	} else if (string === 'decision-tool-B') {
		return 'md:!bg-decision-tool-B-light';
	} else if (string === 'decision-tool-C') {
		return 'md:!bg-decision-tool-C-light';
	} else if (string === 'decision-tool-D') {
		return 'md:!bg-decision-tool-D-light';
	} else if (string === 'decision-tool-E') {
		return 'md:!bg-decision-tool-E-light';
	} else if (string === 'beige') {
		return 'md:!bg-beige-light';
	} else if (string === 'sand') {
		return 'md:!bg-sand-light';
	}
};

export const getTextColorClassName = (string: string): string => {
	if (string === 'health') {
		return 'text-health';
	} else if (string === 'energy-transition') {
		return 'text-energy-transition';
	} else if (string === 'real-estate') {
		return 'text-real-estate';
	} else if (string === 'stocks') {
		return 'text-stocks';
	} else if (string === 'bonds') {
		return 'text-bonds';
	} else if (string === 'equity-shares') {
		return 'text-equity-shares';
	} else if (string === 'aif-shares') {
		return 'text-aif-shares';
	} else if (string === 'donations') {
		return 'text-donations';
	} else if (string === 'social-shares') {
		return 'text-social-shares';
	} else if (string === 'occitan-savings') {
		return 'text-occitan-savings';
	} else if (string === 'funds') {
		return 'text-funds';
	} else if (string === 'decision-tool-A') {
		return 'text-decision-tool-A';
	} else if (string === 'decision-tool-B') {
		return 'text-decision-tool-B';
	} else if (string === 'decision-tool-C') {
		return 'text-decision-tool-C';
	} else if (string === 'decision-tool-D') {
		return 'text-decision-tool-D';
	} else if (string === 'decision-tool-E') {
		return 'text-decision-tool-E';
	} else if (string === 'beige') {
		return 'text-beige';
	} else if (string === 'sand') {
		return 'text-sand';
	} else if (string === 'info') {
		return 'text-info';
	} else if (string === 'white') {
		return 'text-white';
	} else if (string === 'black') {
		return 'text-black';
	} else if (string === 'primary') {
		return 'text-primary';
	} else if (string === 'secondary') {
		return 'text-secondary';
	} else if (string === 'success') {
		return 'text-success';
	} else if (string === 'warning') {
		return 'text-warning';
	} else if (string === 'danger') {
		return 'text-danger';
	} else if (string === 'purple') {
		return 'text-purple';
	} else if (string === 'en_suivi') {
		return 'text-en-suivi';
	} else if (string === 'collecte_en_cours') {
		return 'text-premium-light';
	} else if (string === 'cloture_en_cours') {
		return 'text-premium-light';
	} else if (string === 'prorogation_en_cours') {
		return 'text-prorogation-en-cours';
	} else if (string === 'analyse_prorogation') {
		return 'text-purple-light';
	} else if (string === 'negociations_en_cours') {
		return 'text-negociation-en-cours';
	} else if (string === 'pre_contentieux') {
		return 'text-pre-contentieux';
	} else if (string === 'contentieux') {
		return 'text-contentieux';
	} else if (string === 'sortie_negative') {
		return 'text-sortie-negative';
	} else if (string === 'sortie_positive') {
		return 'text-sortie-positive';
	} else {
		return 'text-secondary';
	}
};

export const getMdTextColorClassName = (string: string): string => {
	if (string === 'health') {
		return 'md:!text-health';
	} else if (string === 'energy-transition') {
		return 'md:!text-energy-transition';
	} else if (string === 'real-estate') {
		return 'md:!text-real-estate';
	} else if (string === 'stocks') {
		return 'md:!text-stocks';
	} else if (string === 'bonds') {
		return 'md:!text-bonds';
	} else if (string === 'equity-shares') {
		return 'md:!text-equity-shares';
	} else if (string === 'aif-shares') {
		return 'md:!text-aif-shares';
	} else if (string === 'donations') {
		return 'md:!text-donations';
	} else if (string === 'social-shares') {
		return 'md:!text-social-shares';
	} else if (string === 'occitan-savings') {
		return 'md:!text-occitan-savings';
	} else if (string === 'funds') {
		return 'md:!text-funds';
	} else if (string === 'occitan-decision-tool-A') {
		return 'md:!text-decision-tool-A';
	} else if (string === 'occitan-decision-tool-B') {
		return 'md:!text-decision-tool-B';
	} else if (string === 'occitan-decision-tool-C') {
		return 'md:!text-decision-tool-C';
	} else if (string === 'occitan-decision-tool-D') {
		return 'md:!text-decision-tool-D';
	} else if (string === 'occitan-decision-tool-E') {
		return 'md:!text-decision-tool-E';
	} else if (string === 'beige') {
		return 'md:!text-beige';
	} else if (string === 'sand') {
		return 'md:!text-sand';
	}
};
