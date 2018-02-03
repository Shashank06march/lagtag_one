class TransactionMailer < ApplicationMailer
	def order_confirmation(user, order)
  		@user = user
  		@order = order
    	mail(to: @user.email, from: "from@lagtag.com", subject: 'Order Confirmation')
    end
end
