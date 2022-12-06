-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2017 a las 21:12:47
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `motovision`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora_mot_vision`
--

CREATE TABLE `bitacora_mot_vision` (
  `COD_BITACORA` int(11) NOT NULL COMMENT 'CAMPO AUTO INCRMENTADO LLAVE PRIMARIA DE LA TABLA',
  `COD_MODULO` int(11) NOT NULL COMMENT 'LLAVE FORANEA DE LA TABLA P_MODULO',
  `COD_TIPO_MODI` int(11) NOT NULL COMMENT 'CAMPO LLAVE FORANEA DE LA TABLA P_TIPO_MODIFICACION',
  `USUARIO_MODI` varchar(20) COLLATE utf8_spanish_ci NOT NULL COMMENT 'CAMPO PARA ALMACENAR EL DOCUMENTO DE IDENTIDAD DE EL SUARIO QUE REALIZA LA MODIFICACION',
  `FEC_MODIFICA` date NOT NULL COMMENT 'FECHA EN QUE SE REALIZA EL MOVIMIENTO',
  `VALOR_ANTERIOR` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'VALOR ANTERIRO DEL DE LA MODIFICACIOIN',
  `VALOR_NUEVO` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'VALOR ACTUAL DEL CAMPO MODIFICADO',
  `COD_REGISTRO` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'CODIGO DEL REGISTRO MODIFICADO'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='TABLA PARA ALMACENAR HISORIA DE TRANSACCIONES DEL APLICATIVO';

--
-- Volcado de datos para la tabla `bitacora_mot_vision`
--

INSERT INTO `bitacora_mot_vision` (`COD_BITACORA`, `COD_MODULO`, `COD_TIPO_MODI`, `USUARIO_MODI`, `FEC_MODIFICA`, `VALOR_ANTERIOR`, `VALOR_NUEVO`, `COD_REGISTRO`) VALUES
(13, 1, 1, '0', '2017-05-25', '', 'REGISTRADO', '456'),
(14, 1, 5, '0', '2017-05-25', 'FABRICIO', 'FABRICIO DAVID', '456'),
(15, 1, 5, '0', '2017-05-25', 'FABRICIO', 'FABRICIO david', '456'),
(16, 1, 5, '0', '2017-05-25', 'FABRICIO david', 'FABRICIO ', '456'),
(17, 1, 5, '0', '2017-05-25', 'FABRICIO ', 'FABRICIO david', '456'),
(18, 1, 5, '0', '2017-05-25', 'FABRICIO david', 'FABRICIO ', '456'),
(19, 1, 5, '0', '2017-05-25', '', '317', '456'),
(20, 1, 5, '0', '2017-05-25', '', 'KARRERA 45 89 89', '456'),
(21, 1, 5, '0', '2017-05-25', '', 'ella', '456'),
(22, 1, 5, '0', '2017-05-25', '', 'GALAL', '456'),
(23, 1, 5, '0', '2017-05-25', '', 'PIEDrahita', '456'),
(24, 1, 5, '0', '2017-05-25', '', '317', '456'),
(25, 1, 5, '0', '2017-05-25', '', 'KARRERA 45 89 89', '456'),
(26, 1, 5, '0', '2017-05-25', 'FABRICIO ', 'FABRICIO david', '456'),
(27, 1, 5, '0', '2017-05-25', '', 'PIEDrahita', '456'),
(28, 1, 5, '0', '2017-05-25', '', 'GALAL', '456'),
(29, 1, 5, '0', '2017-05-25', '', 'ella', '456'),
(30, 1, 5, '0', '2017-05-25', 'FABRICIO david', 'FABRICIO ', '456'),
(31, 1, 5, '0', '2017-05-25', 'FABRICIO ', 'FABRICIO DAVID', '456'),
(32, 1, 5, '0', '2017-05-25', 'PIEDrahita', 'PIEDRAHITA', '456'),
(33, 1, 5, '0', '2017-05-25', 'GALAL', 'GALARZA', '456'),
(34, 1, 5, '0', '2017-05-25', 'ella', 'elIANA', '456'),
(35, 1, 5, '0', '2017-05-25', '317', '3172225072', '456'),
(36, 1, 5, '0', '2017-05-25', 'KARRERA 45 89 89', 'CALLE 19 10 22', '456'),
(37, 1, 1, '0', '2017-05-25', '', 'REGISTRADO', '897'),
(38, 1, 5, '0', '2017-05-25', 'ANDRES', 'ANDRES NADA', '897'),
(39, 1, 5, '0', '2017-05-25', 'RIVERA', 'RIVERASSS', '897'),
(40, 2, 1, '0', '2017-05-26', '', 'REGISTRADO', 'afa 54 j'),
(41, 2, 2, '0', '2017-05-26', '', 'REGISTRADO', 'dzh600b'),
(42, 1, 5, '0', '2017-05-26', 'FABRICIO DAVID', 'FABRICIO', '456'),
(43, 2, 2, '0', '2017-05-26', '', 'REGISTRADO', 'dzh600b'),
(44, 2, 2, '0', '2017-05-26', '', 'REGISTRADO', 'dzh600b'),
(45, 2, 2, '0', '2017-05-26', '', 'REGISTRADO', 'dzh600b'),
(46, 2, 2, '0', '2017-05-26', '', 'REGISTRADO', 'dzh600b'),
(47, 2, 6, '0', '2017-05-26', '6', '4', 'dzh600b'),
(48, 2, 6, '0', '2017-05-26', '4', '3', 'dzh600b'),
(49, 2, 6, '0', '2017-05-26', '3', '5', 'dzh600b'),
(50, 2, 7, '0', '2017-05-26', 'Moto', '3', 'dzh600b'),
(51, 2, 6, '0', '2017-05-26', '5', '3', 'dzh600b'),
(52, 2, 7, '0', '2017-05-26', 'mala', '3', 'dzh600b'),
(53, 2, 7, '0', '2017-05-26', '8', '3', 'dzh600b'),
(54, 2, 6, '0', '2017-05-26', '3', '6', 'dzh600b'),
(55, 2, 6, '0', '2017-05-26', '6', '4', 'dzh600b'),
(56, 2, 6, '0', '2017-05-26', '4', '5', 'dzh600b'),
(57, 4, 1, '0', '2017-05-30', '', 'REGISTRADO', '12345'),
(58, 3, 7, '0', '2017-05-30', '1', 'jkshjkhl', '12345'),
(59, 4, 1, '0', '2017-05-31', '', 'REGISTRADO', '1087553244'),
(60, 3, 7, '0', '2017-06-01', '1', 'Fabricio ddddd', '14565518'),
(61, 5, 3, '0', '2017-06-01', 'EL gf', 'EL gfhjjkgjhg', '123'),
(62, 5, 3, '0', '2017-06-01', 'EL gfhjjkgjhg', 'ELIABNA RAMIREZ', '123'),
(63, 5, 10, '0', '2017-06-01', 'nada', 'ELIABNA RAMIREZ', '123'),
(64, 5, 10, '0', '2017-06-01', 'nad', 'ELIABNA RAMIREZ', '123'),
(65, 5, 12, '0', '2017-06-01', '1', 'ELIABNA RAMIREZ', '123'),
(66, 5, 11, '0', '2017-06-01', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'ELIABNA RAMIREZ', '123'),
(67, 5, 13, '0', '2017-06-01', '2', 'ELIABNA RAMIREZ', '123'),
(68, 5, 13, '0', '2017-06-01', '1', 'ELIABNA RAMIREZ', '123'),
(69, 5, 10, '0', '2017-06-01', 'nad', 'ELIABNA RAMIREZ', '123'),
(70, 5, 11, '0', '2017-06-01', '51eac6b471a284d3341d8c0c63d0f1a286262a18', 'ELIABNA RAMIREZ', '123'),
(71, 5, 12, '0', '2017-06-01', '0', 'ELIABNA RAMIREZ', '123'),
(72, 5, 11, '0', '2017-06-01', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'ELIABNA RAMIREZ', '123'),
(73, 5, 13, '0', '2017-06-01', '2', 'ELIABNA RAMIREZ', '123'),
(74, 5, 12, '0', '2017-06-01', '1', 'ELIABNA RAMIREZ', '123'),
(75, 5, 12, '0', '2017-06-01', '0', 'ELIABNA RAMIREZ', '123'),
(76, 5, 13, '0', '2017-06-01', '1', 'ELIABNA RAMIREZ', '123'),
(77, 5, 11, '', '2017-06-02', '51eac6b471a284d3341d8c0c63d0f1a286262a18', 'ELIABNA RAMIREZ', '123'),
(78, 5, 10, '', '2017-06-02', 'nad', 'ELIABNA RAMIREZ', '123'),
(79, 5, 3, '14565518', '2017-06-02', 'ELIABNA RAMIREZ', 'ELIANA', '123'),
(80, 5, 3, '14565518', '2017-06-02', 'ELIANA', 'ELIANA RAMIREZ', '123'),
(81, 3, 1, '14565518', '2017-06-02', '', 'REGISTRADO', '4'),
(82, 2, 2, '1', '2017-06-06', '', 'REGISTRADO', 'asa65h'),
(83, 2, 2, '1', '2017-06-06', '', 'REGISTRADO', 'asd45r');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas_vehiculos`
--

CREATE TABLE `marcas_vehiculos` (
  `id_marca` int(11) NOT NULL COMMENT 'campo autoincrementado llave primaria de la tabla',
  `des_marca` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'descripciond e la marca d'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `marcas_vehiculos`
--

INSERT INTO `marcas_vehiculos` (`id_marca`, `des_marca`) VALUES
(1, 'YAMAHA'),
(2, 'HONDA'),
(3, 'AUTECO'),
(4, 'KAWASAKY'),
(5, 'SUSUKY'),
(6, 'JAILING');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modelo_vehiculo`
--

CREATE TABLE `modelo_vehiculo` (
  `id_model_vehiculo` int(11) NOT NULL COMMENT 'llave pirmaria de latabla',
  `des_modelo_vehiculo` varchar(5) COLLATE utf8_spanish_ci NOT NULL COMMENT 'campo donde se almacenara el modelo del vehiculo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `modelo_vehiculo`
--

INSERT INTO `modelo_vehiculo` (`id_model_vehiculo`, `des_modelo_vehiculo`) VALUES
(1, '2017'),
(2, '2016'),
(3, '2015'),
(4, '2014'),
(5, '2013'),
(6, '2012'),
(7, '2011'),
(8, '2010'),
(9, '2009'),
(10, '2008'),
(11, '2007'),
(12, '2006'),
(13, '2005'),
(14, '2005'),
(15, '2003'),
(16, '2002'),
(17, '2001'),
(18, '2000'),
(19, '1999'),
(20, '1998'),
(21, '1997'),
(22, '1996'),
(23, '1995'),
(24, '1994'),
(25, '1993'),
(26, '1992'),
(27, '1991'),
(28, '1990'),
(29, '1989'),
(30, '1988'),
(31, '1987'),
(32, '1986'),
(33, '1985'),
(34, '1984'),
(35, '1983'),
(36, '1982'),
(37, '1981'),
(38, '1980'),
(39, '1999');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propietarios`
--

CREATE TABLE `propietarios` (
  `Cod_Propietario` int(11) NOT NULL COMMENT 'campo autoincrementado llave primario de la tabla propietarios',
  `Doc_propietario` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'docuemento de indentidad del propieario',
  `Nom_Propietario` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'nombre del propietario',
  `Ape1_Propietario` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'primer apellido del propietario',
  `Ape2_propietario` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'campo donde se alamacenara el segundo apellido del cliente propietario',
  `Direccion_propietario` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'campo donde se almacenara la direccion de residencia del propietario',
  `Tel_propietario` varchar(15) COLLATE utf8_spanish_ci NOT NULL COMMENT 'Campo donde se almacenara el telefono de contacto del cliente propietario',
  `Referncia` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'campo donde se almacenara el nombre de la persoan que refiere al cliente propietario',
  `fecha_creacion` date NOT NULL COMMENT 'campo donde se almacenara la fecha de creacion del registro',
  `fecha_actulizacion` date NOT NULL COMMENT 'campo donde se almacenara la fecha de la ultima actualización del registro'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `propietarios`
--

INSERT INTO `propietarios` (`Cod_Propietario`, `Doc_propietario`, `Nom_Propietario`, `Ape1_Propietario`, `Ape2_propietario`, `Direccion_propietario`, `Tel_propietario`, `Referncia`, `fecha_creacion`, `fecha_actulizacion`) VALUES
(34, '456', 'FABRICIO', 'GALARZA', 'PIEDRAHITA', 'CALLE 19 10 22', '3172225072', 'elIANA', '2017-05-25', '0000-00-00'),
(35, '897', 'ANDRES NADA', 'MALDONADO', 'RIVERASSS', 'CALLE 12', '3114566541', 'QUIEN', '2017-05-25', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_modulo`
--

CREATE TABLE `p_modulo` (
  `COD_MODULO` int(10) NOT NULL COMMENT 'LLAVE PRIMARIA DE LA TABLA',
  `DES_MODULO` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'DESCRIPCIÓN DEL MODULO'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='TABLA DONDE SE ALMACENARA LOS MODULOS DEL APLICATIVO';

--
-- Volcado de datos para la tabla `p_modulo`
--

INSERT INTO `p_modulo` (`COD_MODULO`, `DES_MODULO`) VALUES
(1, 'REGISTRO PROPIETARIOS'),
(2, 'REGISTRO VEHICULOS'),
(3, 'REGISTRO MECANICOS'),
(4, 'TALLER'),
(5, 'USUARIOS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_tipo_modificacion`
--

CREATE TABLE `p_tipo_modificacion` (
  `COD_TIPO_MODI` int(10) NOT NULL COMMENT 'LLAVE PRIMARIALA DE LA TAB',
  `DES_TIPO_MODI` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'DESCRIPCION DE LA MODIFICACION'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='TABLA DONDE SE ALMACENARA EL TIPO DE MODIFICACION ';

--
-- Volcado de datos para la tabla `p_tipo_modificacion`
--

INSERT INTO `p_tipo_modificacion` (`COD_TIPO_MODI`, `DES_TIPO_MODI`) VALUES
(1, 'REGISTRO NUEVO PROPIETARIO'),
(2, 'REGISTRO NUEVO VEHICULO'),
(3, 'REGISTRO NUEVO USAURIO'),
(4, 'REGISTRO NUEVO MECANICO'),
(5, 'MODIFICAR DATOS PERSONALES '),
(6, 'EDITAR MARCA'),
(7, 'EDITAR TIPO VAHICULO'),
(8, 'EDITAR MODELO VEHICULO'),
(9, 'EDITAR ESTADO VEHICULO'),
(10, 'CAMBIO NOMBRE DE USUARIO'),
(11, 'CAMBIO PASSWORD'),
(12, 'CAMBIO ESTADO'),
(13, 'CAMBIO TIPO USUARIO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_mecanicos`
--

CREATE TABLE `registro_mecanicos` (
  `Cod_Mecanico` int(10) NOT NULL COMMENT 'LLave Primario de la tabla',
  `doc_Mecanico` varchar(20) COLLATE utf8_spanish_ci NOT NULL COMMENT 'documento de indentidad',
  `Nom_Mecanico` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'nombre del mecanico',
  `Ape1_Mecanico` varchar(20) COLLATE utf8_spanish_ci NOT NULL COMMENT 'apellido patenro del mecanico',
  `Ape2_Mecnico` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'apellido materno del mecanico',
  `Tel_Mecanico` varchar(15) COLLATE utf8_spanish_ci NOT NULL COMMENT 'Telefono de contacto de mecanico'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `registro_mecanicos`
--

INSERT INTO `registro_mecanicos` (`Cod_Mecanico`, `doc_Mecanico`, `Nom_Mecanico`, `Ape1_Mecanico`, `Ape2_Mecnico`, `Tel_Mecanico`) VALUES
(1, '14565518', 'Fabricio ddddd', 'galrza ', 'piedrahita', '11111'),
(9, '1087553244', 'Eliana', 'Ramirez', 'Giraldo', '111111');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_motos`
--

CREATE TABLE `registro_motos` (
  `id_registro_motos` int(11) NOT NULL COMMENT 'campo llave autoincrementado y llave primario de la tabla registro_motos',
  `regM_placa` varchar(10) COLLATE utf8_spanish_ci NOT NULL COMMENT 'campo donde se alamacenara la placa del vehiculo ',
  `regM_TipoVehiculo` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'campo donde se almacenara el tipo de vehiculo',
  `id_model_vehiculo` int(11) NOT NULL COMMENT 'llave foranea de la tabla modelo_vehiculos',
  `id_marca` int(11) NOT NULL COMMENT 'llave foranea de la tabla marca',
  `regM_estado` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'campo donde se almacenara el estado del vehiculo al momento del ingreso',
  `fecha_creacion` varchar(10) COLLATE utf8_spanish_ci NOT NULL COMMENT 'campo donde se almacenara la fecha de creacion del registro',
  `fecha_actulizacion` varchar(10) COLLATE utf8_spanish_ci NOT NULL COMMENT 'campo donde se almacenara la fecha de la ultima actaulizaciónd el registro'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `registro_motos`
--

INSERT INTO `registro_motos` (`id_registro_motos`, `regM_placa`, `regM_TipoVehiculo`, `id_model_vehiculo`, `id_marca`, `regM_estado`, `fecha_creacion`, `fecha_actulizacion`) VALUES
(1, 'klasdjflka', '2', 0, 2003, 'oiuio', '2017/05/10', ''),
(2, 'ada76a', 'aeaw', 17, 3, 'sadfas', '2017/05/25', ''),
(3, 'ABA 45 A', 'SDFSDA', 16, 3, 'SAFAS', '2017/05/25', ''),
(4, 'asa 34 a', 'moto', 16, 6, 'mala', '2017/05/26', ''),
(5, 'ada 54 a', 'moto', 16, 2, 'mala', '2017/05/26', ''),
(6, 'afa 54 j', 'moto', 10, 3, 'makla', '2017/05/26', ''),
(7, 'dzh600b', 'Moto', 15, 5, 'buena', '2017/05/26', '2017/05/26'),
(8, 'asa65h', 'Moyo', 10, 2, 'buena', '2017/06/06', ''),
(9, 'asd45r', 'jkljl', 15, 3, 'jkljjkl', '2017/06/06', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reparaciones`
--

CREATE TABLE `reparaciones` (
  `Cod_Reparacion` int(10) NOT NULL COMMENT 'llave primaria de la tabla',
  `cod_Propietario` int(10) NOT NULL COMMENT 'propietario del vehiculo',
  `Cod_placa` int(10) NOT NULL COMMENT 'codigo del vehiculo',
  `Cod_Mecanico` int(10) NOT NULL COMMENT 'mecanico que repara',
  `fecha_Entrada` varchar(15) COLLATE utf8_spanish_ci NOT NULL COMMENT 'fecha entrada al taller',
  `Hora_Entrada` text COLLATE utf8_spanish_ci NOT NULL COMMENT 'hora entrada al taller',
  `Hora_Salida` varchar(15) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'hora salida al del taller',
  `Reparacion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'tipo de reparacion',
  `Observaciones` varchar(500) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'observaciones de la reparacion',
  `Estado` int(2) NOT NULL COMMENT 'indica si la moto esta en reparacion o ya se entrego; 0 Entregada, 1 pendiente',
  `Usu_Recibe` varchar(100) COLLATE utf8_spanish_ci NOT NULL COMMENT 'usuario que recibe el vehiculo al entrar al taller',
  `Usu_Entrega` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'usuario que entrega la moto al salir del taller'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `reparaciones`
--

INSERT INTO `reparaciones` (`Cod_Reparacion`, `cod_Propietario`, `Cod_placa`, `Cod_Mecanico`, `fecha_Entrada`, `Hora_Entrada`, `Hora_Salida`, `Reparacion`, `Observaciones`, `Estado`, `Usu_Recibe`, `Usu_Entrega`) VALUES
(1, 35, 2, 9, '2017/06/02', '14:00', '16:00', NULL, ' ', 2, '1', '1'),
(2, 34, 7, 9, '2017/06/02', '09:00', '', NULL, 'nada\n			', 1, '1', NULL),
(3, 34, 8, 9, '2017/06/06', '08:00', '16:00', '			jkhjklhjkhkjhkhhjk', 'mantenimiento general\n			', 2, '1', '1'),
(4, 35, 2, 9, '2017/06/06', '11:00', NULL, NULL, 'jsalÃ±jfsajfsdkla\n			', 1, '1', NULL),
(5, 35, 8, 9, '2017/06/06', '14:00', '16:00', '			jkhjklhjkhkjhkhhjk', '\n			hjklhjklhklhjkl', 2, '1', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `Cos_TipoUsu` int(10) NOT NULL COMMENT 'llave primaria de la tabla',
  `Des_TipoUsu` varchar(50) COLLATE utf8_spanish_ci NOT NULL COMMENT 'Descripción del tipo de usuaio'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`Cos_TipoUsu`, `Des_TipoUsu`) VALUES
(1, 'ADMIN'),
(2, 'AUXILIAR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Cod_Usuario` int(10) NOT NULL COMMENT 'llave primaria de la tabla',
  `Doc_Usuario` varchar(20) COLLATE utf8_spanish_ci NOT NULL COMMENT 'documento identidad del usuario',
  `Nombre_completo` varchar(100) COLLATE utf8_spanish_ci NOT NULL COMMENT 'nombre de pila del u suario ',
  `loggin` varchar(20) COLLATE utf8_spanish_ci NOT NULL COMMENT 'Nombre de logueo del usuario',
  `password` varchar(500) COLLATE utf8_spanish_ci NOT NULL COMMENT 'passwor de ingreso del usaurio al sistema',
  `Cod_tipoUsu` int(10) NOT NULL COMMENT 'llave pirmaria de la tabla Tipo_usuario ',
  `Estado_Usu` int(2) NOT NULL COMMENT 'Estado del usuario: 0 Inactivo, 1 Activo',
  `intentos` int(2) NOT NULL COMMENT 'numero de intentos invalidos a el sistema de un usuario',
  `Fec_Registro` varchar(15) COLLATE utf8_spanish_ci NOT NULL COMMENT 'Fecha de creación del usaurio',
  `Fec_actualiza` varchar(15) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'Fecha en la que  se actualiza el registro dle usuario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Cod_Usuario`, `Doc_Usuario`, `Nombre_completo`, `loggin`, `password`, `Cod_tipoUsu`, `Estado_Usu`, `intentos`, `Fec_Registro`, `Fec_actualiza`) VALUES
(1, '14565518', 'Fabricio david', 'fdgalarza', '51eac6b471a284d3341d8c0c63d0f1a286262a18', 1, 1, 0, '2017/05/31', NULL),
(2, '123', 'ELIANA RAMIREZ', 'a', '356a192b7913b04c54574d18c28d46e6395428ab', 2, 1, 0, '2017/06/01', '2017/06/02'),
(3, '1', 'Ruben', 'b', '356a192b7913b04c54574d18c28d46e6395428ab', 1, 1, 0, '2017/06/02', NULL),
(4, '2', 'aaa', 'jjj', '356a192b7913b04c54574d18c28d46e6395428ab', 2, 1, 0, '2017/06/02', NULL),
(5, '4', 'j', 'll', '356a192b7913b04c54574d18c28d46e6395428ab', 2, 1, 0, '2017/06/02', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bitacora_mot_vision`
--
ALTER TABLE `bitacora_mot_vision`
  ADD PRIMARY KEY (`COD_BITACORA`);

--
-- Indices de la tabla `marcas_vehiculos`
--
ALTER TABLE `marcas_vehiculos`
  ADD PRIMARY KEY (`id_marca`);

--
-- Indices de la tabla `modelo_vehiculo`
--
ALTER TABLE `modelo_vehiculo`
  ADD PRIMARY KEY (`id_model_vehiculo`);

--
-- Indices de la tabla `propietarios`
--
ALTER TABLE `propietarios`
  ADD PRIMARY KEY (`Cod_Propietario`);

--
-- Indices de la tabla `p_modulo`
--
ALTER TABLE `p_modulo`
  ADD PRIMARY KEY (`COD_MODULO`);

--
-- Indices de la tabla `p_tipo_modificacion`
--
ALTER TABLE `p_tipo_modificacion`
  ADD PRIMARY KEY (`COD_TIPO_MODI`);

--
-- Indices de la tabla `registro_mecanicos`
--
ALTER TABLE `registro_mecanicos`
  ADD PRIMARY KEY (`Cod_Mecanico`);

--
-- Indices de la tabla `registro_motos`
--
ALTER TABLE `registro_motos`
  ADD PRIMARY KEY (`id_registro_motos`);

--
-- Indices de la tabla `reparaciones`
--
ALTER TABLE `reparaciones`
  ADD PRIMARY KEY (`Cod_Reparacion`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`Cos_TipoUsu`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Cod_Usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bitacora_mot_vision`
--
ALTER TABLE `bitacora_mot_vision`
  MODIFY `COD_BITACORA` int(11) NOT NULL AUTO_INCREMENT COMMENT 'CAMPO AUTO INCRMENTADO LLAVE PRIMARIA DE LA TABLA', AUTO_INCREMENT=84;
--
-- AUTO_INCREMENT de la tabla `marcas_vehiculos`
--
ALTER TABLE `marcas_vehiculos`
  MODIFY `id_marca` int(11) NOT NULL AUTO_INCREMENT COMMENT 'campo autoincrementado llave primaria de la tabla', AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `modelo_vehiculo`
--
ALTER TABLE `modelo_vehiculo`
  MODIFY `id_model_vehiculo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'llave pirmaria de latabla', AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT de la tabla `propietarios`
--
ALTER TABLE `propietarios`
  MODIFY `Cod_Propietario` int(11) NOT NULL AUTO_INCREMENT COMMENT 'campo autoincrementado llave primario de la tabla propietarios', AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT de la tabla `p_modulo`
--
ALTER TABLE `p_modulo`
  MODIFY `COD_MODULO` int(10) NOT NULL AUTO_INCREMENT COMMENT 'LLAVE PRIMARIA DE LA TABLA', AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `p_tipo_modificacion`
--
ALTER TABLE `p_tipo_modificacion`
  MODIFY `COD_TIPO_MODI` int(10) NOT NULL AUTO_INCREMENT COMMENT 'LLAVE PRIMARIALA DE LA TAB', AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `registro_mecanicos`
--
ALTER TABLE `registro_mecanicos`
  MODIFY `Cod_Mecanico` int(10) NOT NULL AUTO_INCREMENT COMMENT 'LLave Primario de la tabla', AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `registro_motos`
--
ALTER TABLE `registro_motos`
  MODIFY `id_registro_motos` int(11) NOT NULL AUTO_INCREMENT COMMENT 'campo llave autoincrementado y llave primario de la tabla registro_motos', AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `reparaciones`
--
ALTER TABLE `reparaciones`
  MODIFY `Cod_Reparacion` int(10) NOT NULL AUTO_INCREMENT COMMENT 'llave primaria de la tabla', AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `Cos_TipoUsu` int(10) NOT NULL AUTO_INCREMENT COMMENT 'llave primaria de la tabla', AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Cod_Usuario` int(10) NOT NULL AUTO_INCREMENT COMMENT 'llave primaria de la tabla', AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
