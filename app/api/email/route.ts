import { majice } from "@/app/context/KorpaContext";
import { join } from "path";

const nodemailer = require("nodemailer");
export async function POST(req:Request){
    const {majica} =await req.json();
    let korpa:majice[]=JSON.parse(majica)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "andrijadj96@gmail.com",
        pass: "jvylptuuooehcqpo",
      },
    });
    // const mailOptions = {
    //   from: email,
    //   to: "andrijadj96@gmail.com",
    //   subject:`${ime} ${prezime}`,
    //   html: `<h1>${ime} ${prezime}</h1>
    //   <p>${text}</p>

    //   from <a href="mailto:${email}">${email}</a>
    //   `,
    // };
    const mailOptionss = {
      from: "andrijadj96@gmail.com",
      to: 'atesic7@gmail.com',
      subject:`Posiljka`,
      text: `
      Ime i Prezime: Aleksa Tesic,
      Adresa: Davida Pajica 10,Beograd
      Broj Telefona: 064-473-7375,
        Porudzbina:${korpa.map(korpa=>{
          return(
           korpa.name+" "+korpa.velicina.name+" "+korpa.velicina.boje.name
        )
        })}

      `,
    };
    try {
    //   await transporter.sendMail({
    //     ...mailOptions,
    //   });
      await transporter.sendMail({
        ...mailOptionss,
      });

      return new Response(JSON.stringify({status:'Success'}));
    } catch (error: any) {
      return new Response(JSON.stringify({status:"MISTAKE"}))
    }

}