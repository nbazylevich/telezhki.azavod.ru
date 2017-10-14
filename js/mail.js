//Заказать звонок
$(".form_modal_zvonok").submit(function(){ // перехватываем все при событии отправки
			var form = $(this); // запишем форму, чтобы потом не было проблем с this
				var error = false; // предварительно ошибок нет
				if (!error) { // если ошибки нет
						var data = form.serialize(); // подготавливаем данные
						$.ajax({ // инициализируем ajax запрос
							 type: 'POST', // отправляем в POST формате, можно GET
							 url: '/mail.php', // путь до обработчика, у нас он лежит в той же папке
							 dataType: 'json', // ответ ждем в json формате
							 data: data, // данные для отправки
							 beforeSend: function(data) { // событие до отправки
										form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
									},
							 success: function(data){ // событие после удачного обращения к серверу и получения ответа
										if (data['error']) { // если обработчик вернул ошибку
												alert(data['error']); // покажем её текст
										} else { // если все прошло ок
                      form.find('.submit_modal, .submit_price').val('ОТПРАВЛЕНО');
                      form.find('.submit_modal, .submit_price').addClass('submit_static');
                      form.find('.input_modal, .input_block_14').attr('disabled', 'disabled');
											$('#modal_tel').modal('hide');
										  setTimeout(sps, 500);
										  function sps(){
										    $('#modal_spasibo').modal('show');
										  };
										}
								 },
							 error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
										alert(xhr.status); // покажем ответ сервера
										alert(thrownError); // и текст ошибки
								 },
							 complete: function(data) { // событие после любого исхода
										//form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
								 }
								 });
							form.find('.input_modal, .input_block_14').val('');/////обнуляем форму
				}
				return false; // вырубаем стандартную отправку формы
				});

//Заказать прайс
        $(".form_modal_price").submit(function(){ // перехватываем все при событии отправки
        			var form = $(this); // запишем форму, чтобы потом не было проблем с this
        				var error = false; // предварительно ошибок нет
        				if (!error) { // если ошибки нет
        						var data = form.serialize(); // подготавливаем данные
        						$.ajax({ // инициализируем ajax запрос
        							 type: 'POST', // отправляем в POST формате, можно GET
        							 url: '/mail_2.php', // путь до обработчика, у нас он лежит в той же папке
        							 dataType: 'json', // ответ ждем в json формате
        							 data: data, // данные для отправки
        							 beforeSend: function(data) { // событие до отправки
        										form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
        									},
        							 success: function(data){ // событие после удачного обращения к серверу и получения ответа
        										if (data['error']) { // если обработчик вернул ошибку
        												alert(data['error']); // покажем её текст
        										} else { // если все прошло ок
															form.find('.submit_modal, .submit_price').val('ОТПРАВЛЕНО');
				                      form.find('.submit_modal, .submit_price').addClass('submit_static');
				                      form.find('.input_modal, .input_price').attr('disabled', 'disabled');
															$('#modal_price').modal('hide');
														  setTimeout(sps, 500);
														  function sps(){
														    $('#modal_spasibo').modal('show');
														  };
        										}
        								 },
        							 error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
        										alert(xhr.status); // покажем ответ сервера
        										alert(thrownError); // и текст ошибки
        								 },
        							 complete: function(data) { // событие после любого исхода
        										//form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
        								 }
        								 });
        							form.find('.input_modal, .input_price').val('');/////обнуляем форму
        				}
        				return false; // вырубаем стандартную отправку формы
        				});

//Заказать тележки
												$(".form_modal_teleg").submit(function(){ // перехватываем все при событии отправки
															var form = $(this); // запишем форму, чтобы потом не было проблем с this
																var error = false; // предварительно ошибок нет
																if (!error) { // если ошибки нет
																		var data = form.serialize(); // подготавливаем данные
																		$.ajax({ // инициализируем ajax запрос
																			 type: 'POST', // отправляем в POST формате, можно GET
																			 url: '/mail_3.php', // путь до обработчика, у нас он лежит в той же папке
																			 dataType: 'json', // ответ ждем в json формате
																			 data: data, // данные для отправки
																			 beforeSend: function(data) { // событие до отправки
																						form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
																					},
																			 success: function(data){ // событие после удачного обращения к серверу и получения ответа
																						if (data['error']) { // если обработчик вернул ошибку
																								alert(data['error']); // покажем её текст
																						} else { // если все прошло ок
												                      form.find('.submit_block_12, .submit_block_8').val('ОТПРАВЛЕНО');
												                      form.find('.submit_block_12, .submit_block_8').addClass('submit_static');
												                      form.find('.input_sledit, .input_block_8').attr('disabled', 'disabled');
																							setTimeout(sps, 500);
																						  function sps(){
																						    $('#modal_spasibo').modal('show');
																						  };
																						}
																				 },
																			 error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
																						alert(xhr.status); // покажем ответ сервера
																						alert(thrownError); // и текст ошибки
																				 },
																			 complete: function(data) { // событие после любого исхода
																						//form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
																				 }
																				 });
																			form.find('.input_sledit, .input_block_8').val('');/////обнуляем форму
																}
																return false; // вырубаем стандартную отправку формы
																});

//Заказать дилерский договор
																												$(".form_block_9").submit(function(){ // перехватываем все при событии отправки
																															var form = $(this); // запишем форму, чтобы потом не было проблем с this
																																var error = false; // предварительно ошибок нет
																																if (!error) { // если ошибки нет
																																		var data = form.serialize(); // подготавливаем данные
																																		$.ajax({ // инициализируем ajax запрос
																																			 type: 'POST', // отправляем в POST формате, можно GET
																																			 url: '/mail_4.php', // путь до обработчика, у нас он лежит в той же папке
																																			 dataType: 'json', // ответ ждем в json формате
																																			 data: data, // данные для отправки
																																			 beforeSend: function(data) { // событие до отправки
																																						form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
																																					},
																																			 success: function(data){ // событие после удачного обращения к серверу и получения ответа
																																						if (data['error']) { // если обработчик вернул ошибку
																																								alert(data['error']); // покажем её текст
																																						} else { // если все прошло ок
																												                      form.find('.submit_block_9').val('ОТПРАВЛЕНО');
																												                      form.find('.submit_block_9').addClass('submit_static');
																												                      form.find('.input_block_9').attr('disabled', 'disabled');
																																							setTimeout(sps, 500);
																																						  function sps(){
																																						    $('#modal_spasibo').modal('show');
																																						  };
																																						}
																																				 },
																																			 error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
																																						alert(xhr.status); // покажем ответ сервера
																																						alert(thrownError); // и текст ошибки
																																				 },
																																			 complete: function(data) { // событие после любого исхода
																																						//form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
																																				 }
																																				 });
																																			form.find('.input_block_9').val('');/////обнуляем форму
																																}
																																return false; // вырубаем стандартную отправку формы
																																});
