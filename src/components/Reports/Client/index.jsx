import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

const footerPDF = (currentPage, pageCount) => {
    return [
        {
            text: currentPage + " / " + pageCount,
            alignment: "right",
            fontSize: 9,
            margin: [0, 10, 20, 0]
        }   
    ]
}

export const clientPDF = (client) => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const contacts = client.contacts.map((contact) => {
        return [
            {text: contact.firstName, fontSize:9},
            {text: contact.lastName,fontSize:9},
            {text: contact.phone,fontSize:9},
            {text: contact.email,fontSize:9}
        ]
    })

    const details = [

        {
            text: client.firstName + " " + client.lastName,
            style: 'header'
        },
        `Email: ${client.email}`,
        `Telefone: (${client.phone.substring(0,2)}) ${client.phone.substring(2,7)} - ${client.phone.substring(6,10)} \n \n`,
        {
            text: "Contatos:",
            style: 'quote',
            margin:[0, 10, 0, 0]
        },
        {
            table: {
                headerRows: 1,
                widths: ["*", "*", "*", "*"],
                body: [
                    [
                        {text: "Nome", style: 'tableHeader',bold:true},
                        {text: "Sobrenome", style: 'tableHeader',bold:true},
                        {text: "Telefone", style: 'tableHeader',bold:true},
                        {text: "Email", style: 'tableHeader',bold:true}
                    ],
                    ...contacts
                ]
            },
            layout:{
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
			}   
        }
    ]

    const docDefinitons = {
        pageSize: "A4",

        content: [details],
        styles: {
            header: {
                fontSize: 18,
                bold: true
            },
            subheader: {
                fontSize: 15,
                bold: true
            },
            quote: {
                italics: true,
                bold: true
            },
            small: {
                fontSize: 8
            }
        },
        footer: footerPDF
    }

    pdfMake.createPdf(docDefinitons).download()
}
