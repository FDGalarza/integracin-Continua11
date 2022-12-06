CREATE OR REPLACE PACKAGE GestionarMotoVision IS
    

        TYPE type_cursor IS REF CURSOR;
        
        --PRREGpROPIETARIO
        PROCEDURE PRREGpROPIETARIO(
            pty_docPropietario                   IN PROPIETARIOS.DOC_PROPIETARIO%TYPE,
            pty_nomPropietario                  IN PROPIETARIOS.NOM_PROPIETARIO%TYPE,
            pty_ape1Propietario                 IN PROPIETARIOS.APE1_PROPIETARIO%TYPE,
            pty_ape2Propietario                 IN PROPIETARIOS.APE2_PROPIETARIO%TYPE DEFAULT NULL,
            pty_direccionPropietario           IN PROPIETARIOS.DIRECCION_PROPIETARIO%TYPE,
            pty_telPropietarioo                  IN PROPIETARIOS.TEL_PROPIETARIO%TYPE,
            pty_referencia                         IN PROPIETARIOS.REFERNCIA%TYPE DEFAULT NULL
        );
        
        --PREDITAREGPORPIETARIO
        PROCEDURE PREDITAREGPORPIETARIO(
            pty_codPropietario                   IN PROPIETARIOS.COD_PROPIETARIO%TYPE,
             pty_docPropietario                   IN PROPIETARIOS.DOC_PROPIETARIO%TYPE,
            pty_nomPropietario                  IN PROPIETARIOS.NOM_PROPIETARIO%TYPE,
            pty_ape1Propietario                 IN PROPIETARIOS.APE1_PROPIETARIO%TYPE,
            pty_ape2Propietario                 IN PROPIETARIOS.APE2_PROPIETARIO%TYPE DEFAULT NULL,
            pty_direccionPropietario           IN PROPIETARIOS.DIRECCION_PROPIETARIO%TYPE,
            pty_telPropietarioo                  IN PROPIETARIOS.TEL_PROPIETARIO%TYPE,
            pty_referencia                         IN PROPIETARIOS.REFERNCIA%TYPE DEFAULT NULL
        );

END GestionarMotoVision;
/
CREATE OR REPLACE PACKAGE BODY GestionarMotoVision IS
        
        --PRREGpROPIETARIO
        PROCEDURE PRREGpROPIETARIO(
            pty_docPropietario                   IN PROPIETARIOS.DOC_PROPIETARIO%TYPE,
            pty_nomPropietario                  IN PROPIETARIOS.NOM_PROPIETARIO%TYPE,
            pty_ape1Propietario                 IN PROPIETARIOS.APE1_PROPIETARIO%TYPE,
            pty_ape2Propietario                 IN PROPIETARIOS.APE2_PROPIETARIO%TYPE DEFAULT NULL,
            pty_direccionPropietario           IN PROPIETARIOS.DIRECCION_PROPIETARIO%TYPE,
            pty_telPropietarioo                  IN PROPIETARIOS.TEL_PROPIETARIO%TYPE,
            pty_referencia                         IN PROPIETARIOS.REFERNCIA%TYPE
        )
        IS
        
        lrt_propietario PROPIETARIOS%ROWTYPE;
        lt_error varchar(50);
        BEGIN
                
                IF pty_docPropietario IS NULL THEN
                        lt_error := 'EL CAMPO DOCUMENTO DE IDENTIDAD ES OBLIGATORIO'||chr(13)||' ';
                         RAISE_APPLICATION_ERROR(-20000, lt_error);
                 END IF;
                 
                  IF pty_nomPropietario IS NULL THEN
                         RAISE_APPLICATION_ERROR(-20000,'EL CAMPO BNOMBRE ES OBLIGATORIO');
                 END IF;
                 
                  IF pty_ape1Propietario IS NULL THEN
                         RAISE_APPLICATION_ERROR(-20000,'EL CAMPO PRIMER APELLIDO ES OBLIGATORIO');
                 END IF;
                 
                BEGIN
                       
                        INSERT INTO PROPIETARIOS(
                                                                       COD_PROPIETARIO,
                                                                       DOC_PROPIETARIO, 
                                                                       NOM_PROPIETARIO,
                                                                       APE1_PROPIETARIO,
                                                                       APE2_PROPIETARIO,
                                                                       DIRECCION_PROPIETARIO,
                                                                       TEL_PROPIETARIO,
                                                                       REFERNCIA,
                                                                       FECHA_CREACION
                                                                   ) 
                        VALUES  (
                           SEQ_PROPIETARIOS.NEXTVAL,
                            pty_docPropietario,
                            pty_nomPropietario,
                            pty_ape1Propietario,
                            pty_ape2Propietario,
                            pty_direccionPropietario,
                            pty_telPropietarioo,
                            pty_referencia,
                           SYSDATE
                            
                        );
                       
                        
                EXCEPTION
                        WHEN OTHERS THEN
                         RAISE_APPLICATION_ERROR(-20010,'LLAVE PRIMARIA DUPLICADA');
                 END;
           
              COMMIT;
      END;
      
       --PREDITAREGPORPIETARIO
        PROCEDURE PREDITAREGPORPIETARIO(
            pty_codPropietario                   IN PROPIETARIOS.COD_PROPIETARIO%TYPE,
            pty_docPropietario                   IN PROPIETARIOS.DOC_PROPIETARIO%TYPE,
            pty_nomPropietario                  IN PROPIETARIOS.NOM_PROPIETARIO%TYPE,
            pty_ape1Propietario                 IN PROPIETARIOS.APE1_PROPIETARIO%TYPE,
            pty_ape2Propietario                 IN PROPIETARIOS.APE2_PROPIETARIO%TYPE DEFAULT NULL,
            pty_direccionPropietario           IN PROPIETARIOS.DIRECCION_PROPIETARIO%TYPE,
            pty_telPropietarioo                  IN PROPIETARIOS.TEL_PROPIETARIO%TYPE,
            pty_referencia                         IN PROPIETARIOS.REFERNCIA%TYPE DEFAULT NULL
        ) IS
        
        CURSOR cur_propietario(lty_codPropietario IN PROPIETARIOS.COD_PROPIETARIO%TYPE) IS
            SELECT *
            FROM PROPIETARIOS
            WHERE COD_PROPIETARIO = lty_codPropietario;
            
             
             pnu_docPropietario PROPIETARIOS.DOC_PROPIETARIO%TYPE;
            ltt_nomPropietario  PROPIETARIOS.NOM_PROPIETARIO%TYPE;
            ltt_ape1Popietario PROPIETARIOS.APE1_PROPIETARIO%TYPE;
            ltt_ape2Propietario PROPIETARIOS.APE2_PROPIETARIO%TYPE;
            ltt_direccionPropietario PROPIETARIOS.DIRECCION_PROPIETARIO%TYPE;
            ltt_telPropietarioo PROPIETARIOS.TEL_PROPIETARIO%TYPE;
            ltt_referencia PROPIETARIOS.REFERNCIA%TYPE;
            lt_propietario PROPIETARIOS%ROWTYPE;
            
      BEGIN
      
            OPEN cur_propietario(pty_codPropietario);
                  FETCH cur_propietario INTO lt_propietario;
            CLOSE cur_propietario;
           --SE VALIDA SI SE EDITO EL DOCUENTO DE IDENTIDAD PARA REALIZAR EL UPDATE EN LA TABLA
            IF lt_propietario.DOC_PROPIETARIO <> pty_docPropietario AND pty_docPropietario IS NOT NULL THEN
                    UPDATE PROPIETARIOS 
                    SET       DOC_PROPIETARIO = pty_docPropietario,
                                FECHA_ACTULIZACION = SYSDATE
                    WHERE  COD_PROPIETARIO = pty_codPropietario;
                    
                    --SE DEJA BITACORA DE LA MODIFICACION
                            INSERT INTO BITACORA_MOT_VISION(    
                                                                                          COD_BITACORA,
                                                                                          COD_MUDULO,
                                                                                          COD_TIPOMOD, 
                                                                                          USUARIO_MODI,
                                                                                          FEC_MODIFICA,
                                                                                          VALOR_ANTERIOR,
                                                                                          VALOR_NUEVO
                                                                              )
                             VALUES(
                                                SEQ_BITACORA_MOT_VISION.NEXTVAL,
                                                1,
                                                3,
                                                'SKYNERT',
                                                SYSDATE,
                                                lt_propietario.DOC_PROPIETARIO,
                                                pty_docPropietario
                                         );     
            END IF;
            --SE VALIDA SI SE EDITO EL NOMBRE DEL PROPIETARIO Y SE REALIZA EL UPDATE EN LA TABLA
            IF lt_propietario.NOM_PROPIETARIO <> pty_nomPropietario AND pty_nomPropietario IS NOT NULL THEN
                    UPDATE PROPIETARIOS
                    SET       NOM_PROPIETARIO = pty_nomPropietario
                    WHERE  COD_PROPIETARIO = pty_codPropietario;
                    
                     --SE DEJA BITACORA DE LA MODIFICACION
                            INSERT INTO BITACORA_MOT_VISION(    
                                                                                          COD_BITACORA,
                                                                                          COD_MUDULO,
                                                                                          COD_TIPOMOD, 
                                                                                          USUARIO_MODI,
                                                                                          FEC_MODIFICA,
                                                                                          VALOR_ANTERIOR,
                                                                                          VALOR_NUEVO
                                                                              )
                             VALUES(
                                                SEQ_BITACORA_MOT_VISION.NEXTVAL,
                                                1,
                                                1,
                                                'SKYNERT',
                                                SYSDATE,
                                                lt_propietario.NOM_PROPIETARIO,
                                                pty_nomPropietario
                                         );     
            END IF;
            
           --SE VALIDA SI SE EDITO EL PRIMER APELLIDO Y SE REALIZA EL UPDATE EN LA TABLA
           IF lt_propietario.APE1_PROPIETARIO <> pty_ape1Propietario AND pty_ape1Propietario IS NOT NULL THEN
                UPDATE PROPIETARIOS
                SET       APE1_PROPIETARIO = pty_ape1Propietario,
                            FECHA_ACTULIZACION = SYSDATE
                WHERE  COD_PROPIETARIO = pty_codPropietario;
                
                --SE DEJA BITACORA DE LA MODIFICACION
                            INSERT INTO BITACORA_MOT_VISION(    
                                                                                          COD_BITACORA,
                                                                                          COD_MUDULO,
                                                                                          COD_TIPOMOD, 
                                                                                          USUARIO_MODI,
                                                                                          FEC_MODIFICA,
                                                                                          VALOR_ANTERIOR,
                                                                                          VALOR_NUEVO
                                                                              )
                             VALUES(
                                                SEQ_BITACORA_MOT_VISION.NEXTVAL,
                                                1,
                                                2,
                                                'SKYNERT',
                                                SYSDATE,
                                                 lt_propietario.APE1_PROPIETARIO,
                                                pty_ape1Propietario
                                         );     
           END IF;
           --SE VALIDA SE SE EDITO EL SEGUNDO APELLIDO
           IF (lt_propietario.APE2_PROPIETARIO <> pty_ape2Propietario AND pty_ape2Propietario IS NOT NULL) OR (lt_propietario.APE2_PROPIETARIO IS NULL AND pty_ape2Propietario IS NOT NULL)  THEN
                   UPDATE PROPIETARIOS
                    SET       APE2_PROPIETARIO = pty_ape2Propietario,
                                 FECHA_ACTULIZACION = SYSDATE
                    WHERE  COD_PROPIETARIO = pty_codPropietario;
                    
                    --SE DEJA BITACORA DE LA MODIFICACION
                            INSERT INTO BITACORA_MOT_VISION(    
                                                                                          COD_BITACORA,
                                                                                          COD_MUDULO,
                                                                                          COD_TIPOMOD, 
                                                                                          USUARIO_MODI,
                                                                                          FEC_MODIFICA,
                                                                                          VALOR_ANTERIOR,
                                                                                          VALOR_NUEVO
                                                                              )
                             VALUES(
                                                SEQ_BITACORA_MOT_VISION.NEXTVAL,
                                                1,
                                                2,
                                                'SKYNERT',
                                                SYSDATE,
                                                 lt_propietario.APE1_PROPIETARIO,
                                                pty_ape1Propietario
                                         );     
            END IF;  
            --SE VALIDA SI SE EDITA LA DIRECCION
           -- RAISE_APPLICATION_ERROR(-20010,' lt_propietario.DIRECCION_PROPIETARIO '|| lt_propietario.DIRECCION_PROPIETARIO||' pty_direccionPropietario '||ltt_direccionPropietario);
            IF lt_propietario.DIRECCION_PROPIETARIO <> pty_direccionPropietario AND pty_direccionPropietario IS NOT NULL THEN
                     UPDATE PROPIETARIOS
                    SET       DIRECCION_PROPIETARIO = pty_direccionPropietario,
                                 FECHA_ACTULIZACION = SYSDATE
                    WHERE  COD_PROPIETARIO = pty_codPropietario;
                    
                    --SE DEJA BITACORA DE LA MODIFICACION
                            INSERT INTO BITACORA_MOT_VISION(    
                                                                                          COD_BITACORA,
                                                                                          COD_MUDULO,
                                                                                          COD_TIPOMOD, 
                                                                                          USUARIO_MODI,
                                                                                          FEC_MODIFICA,
                                                                                          VALOR_ANTERIOR,
                                                                                          VALOR_NUEVO
                                                                              )
                             VALUES(
                                                SEQ_BITACORA_MOT_VISION.NEXTVAL,
                                                1,
                                                4,
                                                'SKYNERT',
                                                SYSDATE,
                                                 lt_propietario.DIRECCION_PROPIETARIO,
                                                pty_direccionPropietario
                                         );     
                    
                    
             END IF;
             --SE VALIDA SE SE EDITE EL NUMERO DE TELEFONO
             IF lt_propietario.TEL_PROPIETARIO <> pty_telPropietarioo AND pty_telPropietarioo IS NOT NULL  THEN
                     UPDATE PROPIETARIOS
                    SET       TEL_PROPIETARIO = pty_telPropietarioo,
                                 FECHA_ACTULIZACION = SYSDATE
                    WHERE  COD_PROPIETARIO = pty_codPropietario;
                    
                    --SE DEJA BITACORA DE LA MODIFICACION
                            INSERT INTO BITACORA_MOT_VISION(    
                                                                                          COD_BITACORA,
                                                                                          COD_MUDULO,
                                                                                          COD_TIPOMOD, 
                                                                                          USUARIO_MODI,
                                                                                          FEC_MODIFICA,
                                                                                          VALOR_ANTERIOR,
                                                                                          VALOR_NUEVO
                                                                              )
                             VALUES(
                                                SEQ_BITACORA_MOT_VISION.NEXTVAL,
                                                1,
                                                5,
                                                'SKYNERT',
                                                SYSDATE,
                                                  lt_propietario.TEL_PROPIETARIO ,
                                                pty_telPropietarioo
                                         );     
              END IF;
              --SE VALIDA SI SE EDITA  LA REFERENCIA
              IF (lt_propietario.REFERNCIA <> pty_referencia AND pty_referencia IS NOT NULL) OR (lt_propietario.REFERNCIA IS NULL AND pty_referencia IS NOT NULL) THEN
                    UPDATE PROPIETARIOS
                    SET       REFERNCIA = pty_referencia,
                                 FECHA_ACTULIZACION = SYSDATE
                    WHERE  COD_PROPIETARIO = pty_codPropietario;
                    
                   --SE DEJA BITACORA DE LA MODIFICACION
                            INSERT INTO BITACORA_MOT_VISION(    
                                                                                          COD_BITACORA,
                                                                                          COD_MUDULO,
                                                                                          COD_TIPOMOD, 
                                                                                          USUARIO_MODI,
                                                                                          FEC_MODIFICA,
                                                                                          VALOR_ANTERIOR,
                                                                                          VALOR_NUEVO
                                                                              )
                             VALUES(
                                                SEQ_BITACORA_MOT_VISION.NEXTVAL,
                                                1,
                                                6,
                                                'SKYNERT',
                                                SYSDATE,
                                                 lt_propietario.REFERNCIA,
                                                pty_referencia
                                         );     
              END IF;
           COMMIT;
            
                 
      END;
 END;
    

