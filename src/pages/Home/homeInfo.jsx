import AWSLogo from "../../assets/aws-logo.svg";
import CSharpLogo from "../../assets/csharp-logo.svg";
import CSSLogo from "../../assets/css-logo.svg";
import DjangoLogo from "../../assets/django-logo.svg";
import DotNetLogo from "../../assets/dotnet-logo.svg";
import ExpressLogo from "../../assets/express-logo.svg";
import FastApiLogo from "../../assets/fastapi-logo.svg";
import FlaskLogo from "../../assets/flask-logo.svg";
import HtmlLogo from "../../assets/html-logo.svg";
import JavascriptLogo from "../../assets/javascript-logo.svg";
import MongoDbLogo from "../../assets/mongodb-logo.svg";
import MySQLLogo from "../../assets/mysql-logo.svg";
import NextJsLogo from "../../assets/nextjs-logo.svg";
import NodeJsLogo from "../../assets/nodejs-logo.svg";
import PostgresqlLogo from "../../assets/postgresql-logo.svg";
import PythonLogo from "../../assets/python-logo.svg";
import ReactLogo from "../../assets/react-logo.svg";

export const homeInfo = () => {
  const carrouselInfo = [
    <img src={AWSLogo} height={48} width={48} alt="" />,
    <img src={CSharpLogo} height={48} width={48} alt="" />,
    <img src={CSSLogo} height={48} width={48} alt="" />,
    <img src={DjangoLogo} height={48} width={48} alt="" />,
    <img src={DotNetLogo} height={48} width={48} alt="" />,
    <img src={ExpressLogo} height={48} width={48} alt="" />,
    <img src={FastApiLogo} height={48} width={48} alt="" />,
    <img src={FlaskLogo} height={48} width={48} alt="" />,
    <img src={HtmlLogo} height={48} width={48} alt="" />,
    <img src={JavascriptLogo} height={48} width={48} alt="" />,
    <img src={MongoDbLogo} height={48} width={48} alt="" />,
    <img src={MySQLLogo} height={48} width={48} alt="" />,
    <img src={NextJsLogo} height={48} width={48} alt="" />,
    <img src={NodeJsLogo} height={48} width={48} alt="" />,
    <img src={PostgresqlLogo} height={48} width={48} alt="" />,
    <img src={PythonLogo} height={48} width={48} alt="" />,
    <img src={ReactLogo} height={48} width={48} alt="" />,
  ]

  return {
    carrouselInfo
  }
}