// このファイルには、データの型定義が含まれています。
// データの構造と、各プロパティが受け入れるべきデータ型を記述しています。
// 学習の簡素化のため、これらの型を手動で定義しています。
// ただし、PrismaなどのORMを使用している場合、これらの型は自動的に生成されます。
export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};

export type Customer = {
	id: string;
	name: string;
	email: string;
	image_url: string;
};

export type Invoice = {
	id: string;
	customer_id: string;
	amount: number;
	date: string;
	// TypeScriptでは、これは文字列ユニオン型と呼ばれます。
	// "status"プロパティは、'pending'または'paid'の2つの文字列のいずれかのみを受け入れることができることを意味します。
	status: 'pending' | 'paid';
};

export type Revenue = {
	month: string;
	revenue: number;
};

export type LatestInvoice = {
	id: string;
	name: string;
	image_url: string;
	email: string;
	amount: string;
};

// データベースは金額を数値で返しますが、後でformatCurrency関数を使用して文字列にフォーマットします
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
	amount: number;
};

export type InvoicesTable = {
	id: string;
	customer_id: string;
	name: string;
	email: string;
	image_url: string;
	date: string;
	amount: number;
	status: 'pending' | 'paid';
};

export type CustomersTableType = {
	id: string;
	name: string;
	email: string;
	image_url: string;
	total_invoices: number;
	total_pending: number;
	total_paid: number;
};

export type FormattedCustomersTable = {
	id: string;
	name: string;
	email: string;
	image_url: string;
	total_invoices: number;
	total_pending: string;
	total_paid: string;
};

export type CustomerField = {
	id: string;
	name: string;
};

export type InvoiceForm = {
	id: string;
	customer_id: string;
	amount: number;
	status: 'pending' | 'paid';
};
